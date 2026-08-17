import pandas as pd


def prepare_input(data):
    return pd.DataFrame([{
        "Gender": data.Gender,
        "Study_Hours_per_Week": data.Study_Hours_per_Week,
        "Attendance_Rate": data.Attendance_Rate,
        "Past_Exam_Scores": data.Past_Exam_Scores,
        "Parental_Education_Level": data.Parental_Education_Level,
        "Internet_Access_at_Home": data.Internet_Access_at_Home,
        "Extracurricular_Activities": data.Extracurricular_Activities,
    }])