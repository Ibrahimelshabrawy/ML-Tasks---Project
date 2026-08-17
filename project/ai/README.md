# Student Performance AI

A machine learning API that predicts a student's final exam score based on academic and personal performance factors.

## Project Overview

This project uses machine learning to predict a student's final exam score based on several factors such as study hours, attendance rate, previous exam scores, and other student-related information.

The trained machine learning model is exposed through a REST API using FastAPI, allowing other applications such as a Node.js or NestJS backend to send student data and receive a predicted score.

## Features

- Student final exam score prediction
- Machine Learning model using Linear Regression
- Data preprocessing using Scikit-learn Pipeline
- FastAPI REST API
- Pydantic request validation
- Model loaded once at application startup
- CORS support
- Health check endpoint
- Automated API tests
- Swagger API documentation

## Machine Learning

### Input Features

The model uses the following features:

- Gender
- Study Hours per Week
- Attendance Rate
- Past Exam Scores
- Parental Education Level
- Internet Access at Home
- Extracurricular Activities

### Target

The model predicts:

`Final_Exam_Score`

### Model

Linear Regression

### Evaluation

The model was evaluated using MAE, RMSE, and R².

Current results:

- MAE: 3.07
- RMSE: 3.80
- R²: 0.56

## Project Structure

```text
student-performance-ai/
│
├── app/
│   ├── api/
│   │   └── routes/
│   │       └── prediction.py
│   │
│   ├── core/
│   │   └── config.py
│   │
│   ├── schemas/
│   │   └── prediction.py
│   │
│   ├── services/
│   │   ├── preprocessing.py
│   │   └── prediction_service.py
│   │
│   └── main.py
│
├── data/
│   └── student_performance_dataset.csv
│
├── models/
│   └── student_model.pkl
│
├── notebooks/
│   └── training.ipynb
│
├── tests/
│   └── test_prediction.py
│
├── .env
├── .env.example
├── .gitignore
├── pytest.ini
├── requirements.txt
└── README.md
```

## Technologies

- Python
- Pandas
- NumPy
- Scikit-learn
- FastAPI
- Pydantic
- Uvicorn
- Joblib
- Pytest

## Installation

Clone the repository:

```bash
git clone <repository-url>
```

Move into the project directory:

```bash
cd student-performance-ai
```

Create a virtual environment:

```bash
python -m venv venv
```

Activate the virtual environment on Windows:

```bash
venv\Scripts\activate
```

Install the required packages:

```bash
pip install -r requirements.txt
```

## Environment Variables

Create a `.env` file in the project root:

```env
APP_NAME=Student Performance AI
MODEL_PATH=models/student_model.pkl
```

## Run Locally

Start the FastAPI server:

```bash
uvicorn app.main:app --reload
```

The API will be available at:

`http://localhost:8000`

## API Documentation

FastAPI provides interactive Swagger documentation.

Open:

`http://localhost:8000/docs`

## API Endpoints

### Health Check

`GET /health`

Response:

```json
{
  "status": "ok"
}
```

### Prediction

`POST /api/v1/predict`

Request:

```json
{
  "Gender": "Male",
  "Study_Hours_per_Week": 25,
  "Attendance_Rate": 85,
  "Past_Exam_Scores": 80,
  "Parental_Education_Level": "Masters",
  "Internet_Access_at_Home": "Yes",
  "Extracurricular_Activities": "Yes"
}
```

Response:

```json
{
  "predicted_score": 64.32
}
```

The predicted score will vary depending on the input data and trained model.

## Testing

Run all tests using:

```bash
python -m pytest
```

The project includes tests for:

- Health check
- Successful prediction
- Invalid prediction input

Expected result:

```text
3 passed
```

## Model Export

The trained model is exported as:

`models/student_model.pkl`

The exported file contains the complete Scikit-learn Pipeline, including preprocessing and the trained model.

This allows the API to load the pipeline and make predictions without manually applying the encoding steps again.

## CORS

The API allows requests from the frontend development server:

`http://localhost:5173`

This allows the machine learning API to be connected to a frontend application.

## Deployment

The application can be deployed as a Python web service without Docker.

The production server can be started using:

```bash
uvicorn app.main:app --host 0.0.0.0 --port $PORT
```

## Future Integration

The AI service can be integrated with a Node.js or NestJS backend.

Example architecture:

```text
Frontend
   │
   ▼
NestJS Backend
   │
   │ POST /api/v1/predict
   ▼
FastAPI AI Service
   │
   ▼
Machine Learning Model
   │
   ▼
Predicted Score
```

The NestJS backend can send the student's information to the FastAPI service and use the returned prediction in the application.
