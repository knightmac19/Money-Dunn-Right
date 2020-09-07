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
   * * * * * * Budget  Routes * * * * * * * *
   * * * * * * * * * * * * * * * * * * * * * *
   * */

  getAllBudgets: () => {
    return axios.get("/api/budget");
  },

  createBudget: budgetData => {
    return axios.post("/api/budget/", budgetData);
  },

  getBudget: id => {
    return axios.get("/api/budget/" + id);
  },

  updateBudget: ({ BudgetID }) => {
    return axios.put("/api/budget/" + BudgetID, {
      // object of data to be updated
    });
  },

  deleteBudget: id => {
    return axios.delete("/api/budget/", { data: { id } });
  },

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
