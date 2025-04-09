from dotenv import load_dotenv
import os
from langchain_groq import ChatGroq
from langchain.agents import Tool, create_react_agent, AgentExecutor
from langchain.prompts import PromptTemplate
from langchain.chains import LLMChain
from langchain_community.tools import DuckDuckGoSearchTool  # Updated this line

load_dotenv()

GROQ_API_KEY = os.getenv("GROQ_API_KEY")
MODEL_NAME = os.getenv("MODEL_NAME")
search_tool = DuckDuckGoSearchTool()

def get_llm():
    return ChatGroq(
        api_key=GROQ_API_KEY,
        model_name=MODEL_NAME,
        temperature=0.7
    )

def create_researcher_agent(llm):
    tools = [
        Tool(
            name="Search",
            func=search_tool.run,
            description="Useful for searching the internet for information about topics."
        )
    ]
    
    researcher_prompt = PromptTemplate.from_template(
        """You are a Research Specialist. Find information on topics.
        
        {tools}
        
        Tool Names: {tool_names}
        
        Use the tools to research the topic.
        
        {agent_scratchpad}
        
        Human: {input}
        AI: """
    )
    
    agent = create_react_agent(llm, tools, researcher_prompt)
    agent_executor = AgentExecutor.from_agent_and_tools(
        agent=agent,
        tools=tools,
        verbose=True,
        handle_parsing_errors=True,
        max_iterations=3
    )
    
    return agent_executor

def create_fact_checker_agent(llm):
    fact_checker_prompt = PromptTemplate.from_template(
        """You are a Fact Checker. Verify this research: {research_findings}
        
        Human: {input}
        AI: """
    )
    
    fact_checker_chain = LLMChain(
        llm=llm,
        prompt=fact_checker_prompt,
        verbose=True
    )
    
    return fact_checker_chain

def create_writer_agent(llm):
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
    research_result = researcher_agent.invoke(
        {"input": f"Research about: {topic}. Provide key points."}
    )
    if isinstance(research_result, dict) and "output" in research_result:
        return research_result["output"]
    return str(research_result)

def run_fact_check(fact_checker_chain, research_findings):
    try:
        input_text = "Verify the accuracy of these research findings."
        verification_result = fact_checker_chain({
            "research_findings": research_findings,
            "input": input_text
        })
        
        if isinstance(verification_result, dict) and "text" in verification_result:
            return verification_result["text"]
        return str(verification_result)
    except Exception as e:
        return f"Unable to fully verify research. Here's the original research: {research_findings[:200]}..."

def create_newsletter(writer_chain, topic, verified_research):
    newsletter = writer_chain({
        "topic": topic,
        "verified_research": verified_research,
        "input": f"Create an engaging and well-structured newsletter about {topic} based on the verified research."
    })
    
    if isinstance(newsletter, dict) and "text" in newsletter:
        return newsletter["text"]
    return str(newsletter)