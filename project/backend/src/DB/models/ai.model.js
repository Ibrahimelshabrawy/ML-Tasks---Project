import mongoose from "mongoose";

export const GenderEnum = {
  male: "male",
  female: "female",
};

export const internetAccessAtHomeEnum = {
  yes: "yes",
  no: "no",
};
export const extracurricularActivitiesEnum = {
  yes: "yes",
  no: "no",
};

const studentPerformanceSchema = new mongoose.Schema(
  {
    gender: {
      type: String,
      enum: GenderEnum,
      required: true,
      trim: true,
    },

    studyHoursPerWeek: {
      type: Number,
      required: true,
    },

    attendanceRate: {
      type: Number,
      required: true,
    },

    pastExamScores: {
      type: Number,
      required: true,
    },

    parentalEducationLevel: {
      type: String,
      required: true,
      trim: true,
    },

    internetAccessAtHome: {
      type: String,
      enum: internetAccessAtHomeEnum,
      required: true,
      trim: true,
    },

    extracurricularActivities: {
      type: String,
      enum: extracurricularActivitiesEnum,
      required: true,
      trim: true,
    },

    predictedScore: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
    strictQuery: true,
  },
);

const studentPerformanceModel =
  mongoose.models.studentPerformance ||
  mongoose.model("studentPerformance", studentPerformanceSchema);

export default studentPerformanceModel;
