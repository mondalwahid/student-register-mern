import Student from "../model/student-schema.js";

export const addStudents = async (request, response) => {
  const student = request.body;
  const newStudent = new Student(student);

  try {
    await newStudent.save();
    response.json(newStudent);
  } catch (error) {
    response.json({ message: error.message });
  }
};
