from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import uvicorn
from main import get_llm, create_researcher_agent, create_fact_checker_agent, create_writer_agent, run_research, run_fact_check, create_newsletter

app = FastAPI()

# Configure CORS to allow requests from the client
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:8080",
        "https://ainewsletter.onrender.com",
        "https://ainewsletter-server.onrender.com"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class NewsletterRequest(BaseModel):
    topic: str

class NewsletterResponse(BaseModel):
    research_findings: str
    verified_research: str
    newsletter: str

@app.post("/api/generate-newsletter", response_model=NewsletterResponse)
async def generate_newsletter(request: NewsletterRequest):
    try:
        # Initialize LLM
        llm = get_llm()
        
        # Create agents
        researcher_agent = create_researcher_agent(llm)
        fact_checker_chain = create_fact_checker_agent(llm)
        writer_chain = create_writer_agent(llm)
        
        # Run the workflow
        research_findings = run_research(researcher_agent, request.topic)
        verified_research = run_fact_check(fact_checker_chain, research_findings)
        newsletter = create_newsletter(writer_chain, request.topic, verified_research)
        
        return NewsletterResponse(
            research_findings=research_findings,
            verified_research=verified_research,
            newsletter=newsletter
        )
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)