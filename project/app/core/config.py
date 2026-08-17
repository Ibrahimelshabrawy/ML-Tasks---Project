import os

from dotenv import load_dotenv

load_dotenv()

APP_NAME = os.getenv("APP_NAME", "Student Performance AI")
MODEL_PATH = os.getenv("MODEL_PATH", "models/student_model.pkl")