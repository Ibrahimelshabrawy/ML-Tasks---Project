from pydantic import BaseModel


class PredictionRequest(BaseModel):
    Gender: str
    Study_Hours_per_Week: float
    Attendance_Rate: float
    Past_Exam_Scores: float
    Parental_Education_Level: str
    Internet_Access_at_Home: str
    Extracurricular_Activities: str

class PredictionResponse(BaseModel):
    predicted_score: float