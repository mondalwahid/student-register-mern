import mongoose from "mongoose";

const studentSchema = mongoose.Schema({
  name: String,
  timezones: String,
  grades: String,
  number: String,
  email: String,
  cities: String,
});

const Student = mongoose.model("students", studentSchema);

export default Student;
