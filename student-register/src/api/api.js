import axios from "axios";

const studentsUrl = "/students";

export const addStudents = async (studentSchema) => {
  return await axios.post(`${studentsUrl}/add`, studentSchema);
};
