from typing import List, Optional
from pydantic import BaseModel, EmailStr, Field

class ContactInfo(BaseModel):
    name: str
    title: str
    email: str
    phone: str
    location: str
    github: str
    linkedin: Optional[str] = None
    hackerrank: Optional[str] = None
    leetcode: Optional[str] = None
    website: str
    summary: str

class EducationItem(BaseModel):
    institution: str
    degree: str
    score: str
    period: str
    location: Optional[str] = None

class ExperienceItem(BaseModel):
    company: str
    role: str
    period: str
    location: str
    highlights: List[str]
    tech_stack: List[str]

class ProjectItem(BaseModel):
    id: str
    title: str
    period: str
    tech_stack: List[str]
    category: str
    description: str
    highlights: List[str]
    links: Optional[dict] = None

class SkillCategory(BaseModel):
    category: str
    skills: List[str]

class AccomplishmentItem(BaseModel):
    title: str
    description: str
    link: Optional[str] = None
    tag: str

class ResumeData(BaseModel):
    contact: ContactInfo
    education: List[EducationItem]
    experience: List[ExperienceItem]
    projects: List[ProjectItem]
    skills: List[SkillCategory]
    accomplishments: List[AccomplishmentItem]

class ContactMessageRequest(BaseModel):
    name: str = Field(..., min_length=2, max_length=100)
    email: EmailStr
    subject: str = Field(..., min_length=2, max_length=150)
    message: str = Field(..., min_length=5, max_length=2000)

class ContactMessageResponse(BaseModel):
    success: bool
    message: str
