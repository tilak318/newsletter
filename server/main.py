import os
from dotenv import load_dotenv
import streamlit as st
from langchain.memory import ConversationBufferMemory
from langchain.prompts import PromptTemplate
from langchain_community.tools import DuckDuckGoSearchRun
from langchain_groq import ChatGroq
from langchain.chains import LLMChain
from langchain.agents import AgentExecutor, create_react_agent
from langchain.tools import Tool

load_dotenv()
os.environ["SERPER_API_KEY"] = os.getenv("SERPER_API_KEY")
GROQ_API_KEY = os.getenv("GROQ_API_KEY")
MODEL_NAME = os.getenv("MODEL_NAME", "llama3-70b-8192")

# Initialize search tool
search_tool = DuckDuckGoSearchRun()

def get_llm():
    return ChatGroq(
        api_key=GROQ_API_KEY,
        model_name=MODEL_NAME,
        temperature=0.7
    )

def create_researcher_agent(llm):
    # Create a tool that the agent can use
    tools = [
        Tool(
            name="Search",
            func=search_tool.run,
            description="Useful for searching the internet for information about topics."
        )
    ]
    
    # Simplified prompt to reduce token usage
    researcher_prompt = PromptTemplate.from_template(
        """You are a Research Specialist. Find information on topics.
        
        {tools}
        
        Tool Names: {tool_names}
        
        Use the tools to research the topic.
        
        {agent_scratchpad}
        
        Human: {input}
        AI: """
    )
    
    # Create the agent
    agent = create_react_agent(llm, tools, researcher_prompt)
    agent_executor = AgentExecutor.from_agent_and_tools(
        agent=agent,
        tools=tools,
        verbose=True,
        handle_parsing_errors=True,
        max_iterations=3  # Limit iterations to reduce token usage
    )
    
    return agent_executor

def create_fact_checker_agent(llm):
    # Simplified prompt to reduce token usage
    fact_checker_prompt = PromptTemplate.from_template(
        """You are a Fact Checker. Verify this research: {research_findings}
        
        Human: {input}
        AI: """
    )
    
    # Remove memory to simplify the chain
    fact_checker_chain = LLMChain(
        llm=llm,
        prompt=fact_checker_prompt,
        verbose=True
    )
    
    return fact_checker_chain

def run_fact_check(fact_checker_chain, research_findings):
    # Fixed function for Streamlit environment
    try:
        # Create a combined input string
        input_text = "Verify the accuracy of these research findings."
        
        # Call the chain with a dictionary of inputs
        verification_result = fact_checker_chain({
            "research_findings": research_findings,
            "input": input_text
        })
        
        # Extract the text from the result
        if isinstance(verification_result, dict) and "text" in verification_result:
            return verification_result["text"]
        return str(verification_result)
    except Exception as e:
        st.error(f"Error in fact checking: {str(e)}")
        # Return a simplified version if there's an error
        return f"Unable to fully verify research. Here's the original research: {research_findings[:200]}..."

def create_writer_agent(llm):
    # Simplified prompt to reduce token usage
    writer_prompt = PromptTemplate.from_template(
        """You are a Newsletter Writer. Create a newsletter about {topic}.
        Format: Title, Subtitle, Overview, Headers, 300-word content.
        
        Research: {verified_research}
        
        Human: {input}
        AI: """
    )
    
    writer_chain = LLMChain(
        llm=llm,
        prompt=writer_prompt,
        verbose=True
    )
    
    return writer_chain

def run_research(researcher_agent, topic):
    # Simplified input to reduce token usage
    research_result = researcher_agent.invoke(
        {"input": f"Research about: {topic}. Provide key points."}
    )
    # Extract the output from the result
    if isinstance(research_result, dict) and "output" in research_result:
        return research_result["output"]
    return str(research_result)

def create_newsletter(writer_chain, topic, verified_research):
    newsletter = writer_chain({
        "topic": topic,
        "verified_research": verified_research,
        "input": f"Create an engaging and well-structured newsletter about {topic} based on the verified research."
    })
    
    if isinstance(newsletter, dict) and "text" in newsletter:
        return newsletter["text"]
    return str(newsletter)

def main():
    st.title("Newsletter Creation System")
    
    topic = st.text_input("Enter the newsletter topic:")
    
    if st.button("Generate Newsletter"):
        if not topic:
            st.error("Please enter a topic before generating a newsletter.")
            return
            
        try:
            # Initialize LLM
            llm = get_llm()
            st.write(f"Using Groq with model: {MODEL_NAME}")
            
            # Create agents
            researcher_agent = create_researcher_agent(llm)
            fact_checker_chain = create_fact_checker_agent(llm)
            writer_chain = create_writer_agent(llm)
            
            # Run the workflow with better error handling
            with st.spinner("Researching the topic..."):
                research_findings = run_research(researcher_agent, topic)
                st.success("Research completed!")
                st.write("### Research Findings")
                st.write(research_findings)
            
            with st.spinner("Verifying research findings..."):
                verified_research = run_fact_check(fact_checker_chain, research_findings)
                st.success("Verification completed!")
                st.write("### Verified Research")
                st.write(verified_research)
            
            with st.spinner("Creating newsletter..."):
                newsletter = create_newsletter(writer_chain, topic, verified_research)
                st.success("Newsletter created!")
                st.write("### Newsletter")
                st.markdown(newsletter)
            
            # Save the newsletter to a file
            file_name = f"{topic.replace(' ', '_')}_newsletter.html"
            with open(file_name, "w", encoding="utf-8") as f:
                f.write(f"<html><body>{newsletter}</body></html>")
            st.write(f"Newsletter saved to `{file_name}`")
            
        except Exception as e:
            st.error(f"Error: {str(e)}")
            st.info("Tip: Ensure your Groq API key is valid and the model name is correct in your .env file")

if __name__ == "__main__":
    main()