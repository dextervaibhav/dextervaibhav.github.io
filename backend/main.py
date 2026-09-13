import os
import json
from datetime import datetime
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse, JSONResponse
from backend.data import RESUME_DATA
from backend.models import ContactMessageRequest, ContactMessageResponse

app = FastAPI(
    title="Vaibhav Singh - 3D Portfolio API",
    description="FastAPI Backend for Vaibhav Singh's 3D Portfolio Website",
    version="1.0.0"
)

# Enable CORS for local testing and GitHub Pages frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

PROJECT_ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
MESSAGES_FILE = os.path.join(PROJECT_ROOT, "backend", "messages.json")

@app.get("/api/health")
async def health_check():
    return {
        "status": "healthy",
        "timestamp": datetime.utcnow().isoformat(),
        "developer": "Vaibhav Singh",
        "portfolio": "3D Interactive Resume"
    }

@app.get("/api/resume")
async def get_resume():
    """Returns the complete structured resume data."""
    return RESUME_DATA

@app.get("/api/contact/info")
async def get_contact_info():
    """Returns contact and social profiles."""
    return RESUME_DATA["contact"]

@app.get("/api/projects")
async def get_projects():
    """Returns list of featured engineering and research projects."""
    return RESUME_DATA["projects"]

@app.get("/api/experience")
async def get_experience():
    """Returns work history with Qualcomm, ABP Holding, and TCS."""
    return RESUME_DATA["experience"]

@app.get("/api/skills")
async def get_skills():
    """Returns categorized skills matrix."""
    return RESUME_DATA["skills"]

@app.post("/api/contact", response_model=ContactMessageResponse)
async def submit_contact_message(message_data: ContactMessageRequest):
    """Receives contact inquiries and logs them locally."""
    try:
        messages = []
        if os.path.exists(MESSAGES_FILE):
            try:
                with open(MESSAGES_FILE, "r", encoding="utf-8") as f:
                    messages = json.load(f)
            except Exception:
                messages = []
        
        new_msg = message_data.model_dump()
        new_msg["created_at"] = datetime.utcnow().isoformat()
        messages.append(new_msg)
        
        with open(MESSAGES_FILE, "w", encoding="utf-8") as f:
            json.dump(messages, f, indent=2)
            
        return ContactMessageResponse(
            success=True,
            message=f"Thank you {message_data.name}! Your message has been received. Vaibhav will reach out to you shortly."
        )
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to record message: {str(e)}")

# Mount static asset directories
assets_dir = os.path.join(PROJECT_ROOT, "assets")
css_dir = os.path.join(PROJECT_ROOT, "css")
js_dir = os.path.join(PROJECT_ROOT, "js")

if os.path.isdir(assets_dir):
    app.mount("/assets", StaticFiles(directory=assets_dir), name="assets")
if os.path.isdir(css_dir):
    app.mount("/css", StaticFiles(directory=css_dir), name="css")
if os.path.isdir(js_dir):
    app.mount("/js", StaticFiles(directory=js_dir), name="js")

@app.get("/")
async def serve_index():
    index_file = os.path.join(PROJECT_ROOT, "index.html")
    if os.path.isfile(index_file):
        return FileResponse(index_file)
    return JSONResponse({
        "message": "FastAPI Backend is running. Frontend index.html not found.",
        "api_docs": "/docs",
        "resume_data": "/api/resume"
    })

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("backend.main:app", host="0.0.0.0", port=8000, reload=True)
