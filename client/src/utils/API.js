import axios from "axios";

export default {
  /**
   * * * * * * * * * * * * * * * * * * * * * *
   * * * * * * User  Routes * * * * * * * *
   * * * * * * * * * * * * * * * * * * * * * *
   * */

  authenticateUser: data => {
    return axios.post("/api/user/login", data);
  },

  getAllUsers: () => {
    return axios.get("/api/user/");
  },

  createUser: userData => {
    return axios.post("/api/user/", userData);
  },

  getUser: id => {
    return axios.get("/api/user/" + id);
  },

  updateUser: ({ UserID, firstName, lastName, email }) => {
    return axios.put("/api/user/" + UserID, {
      firstName: firstName,
      lastName: lastName,
      email: email
    });
  },

  // deleteUser: id => {
  //   return axios.delete("/api/user/", { data: { id } });
  // },

  /**
   * * * * * * * * * * * * * * * * * * * * * *
   * * * * * * Student  Routes * * * * * * * *
   * * * * * * * * * * * * * * * * * * * * * *
   * */

  // getAllStudents: () => {
  //   return axios.get("/api/student");
  // },

  // createStudent: studentData => {
  //   return axios.post("/api/student/", studentData);
  // },

  // getStudent: id => {
  //   return axios.get("/api/student/" + id);
  // },

  // updateStudent: ({ StudentID, firstName, lastName }) => {
  //   return axios.put("/api/student/" + StudentID, {
  //     firstName: firstName,
  //     lastName: lastName
  //   });
  // },

  // deleteStudent: id => {
  //   return axios.delete("/api/student/", { data: { id } });
  // },

  /**
   * * * * * * * * * * * * * * * * * * * * * *
   * * * * * * * Matrix Routes * * * * * * * *
   * * * * * * * * * * * * * * * * * * * * * *
   * */

  //   createMatrix: matrixData => {
  //     return axios.post("/api/matrix/", matrixData);
  //   },

  //   updateMatrix: ({ MatrixID, title, matrix }, id) => {
  //     return axios.put("/api/matrix/" + id, { MatrixID, title, matrix });
  //   },

  //   deleteMatrix: id => {
  //     return axios.delete("/api/matrix/", { data: { id } });
  //   },

  //   getAllMatrices: () => {
  //     return axios.get("/api/matrix/");
  //   }
};
