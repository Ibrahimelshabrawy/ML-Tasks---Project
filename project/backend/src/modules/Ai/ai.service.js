import axios from "axios";

import * as db_service from "../../DB/db.services.js";

import {successResponse} from "../../common/utils/success.response.js";
import studentPerformanceModel from "../../DB/models/ai.model.js";
import {AI_SERVICE_URL} from "../../../config/config.service.js";

export const predictStudentPerformance = async (req, res, next) => {
  const {
    gender,
    studyHoursPerWeek,
    attendanceRate,
    pastExamScores,
    parentalEducationLevel,
    internetAccessAtHome,
    extracurricularActivities,
  } = req.body;

  try {
    const {data} = await axios.post(AI_SERVICE_URL, {
      Gender: gender,
      Study_Hours_per_Week: studyHoursPerWeek,
      Attendance_Rate: attendanceRate,
      Past_Exam_Scores: pastExamScores,
      Parental_Education_Level: parentalEducationLevel,
      Internet_Access_at_Home: internetAccessAtHome,
      Extracurricular_Activities: extracurricularActivities,
    });

    const prediction = await db_service.create({
      model: studentPerformanceModel,
      data: {
        gender,
        studyHoursPerWeek,
        attendanceRate,
        pastExamScores,
        parentalEducationLevel,
        internetAccessAtHome,
        extracurricularActivities,
        predictedScore: data.predicted_score,
      },
    });

    return successResponse({
      res,
      status: 200,
      message: "Student Performance Predicted Successfully",
      data: {
        prediction,
      },
    });
  } catch (error) {
    console.error("AI Service Error:", error.response?.data || error.message);

    throw new Error("AI Prediction Service Is Currently Unavailable", {
      cause: 503,
    });
  }
};
