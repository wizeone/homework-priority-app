import { Schema, model } from "mongoose";

export interface Class {
  name: string;
  teacher?: string;
  grade?: number;
}

const schema = new Schema<Class>(
  {
    name: { type: String, required: true },
    teacher: { type: String },
    grade: { type: Number },
  },
  { timestamps: true }
);

export const ClassModel = model<Class>("classes", schema);
