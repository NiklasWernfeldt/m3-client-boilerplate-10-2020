import axios from "axios";

class UserService {
  constructor() {
    this.user = axios.create({
      // baseURL: "http://localhost:5000/api", before heroku deployment
      baseURL: process.env.REACT_APP_API_URL + "/api", // setup deployment

      withCredentials: true,
    });
  }

  getUserInfo = (userId) => {
    console.log("getUserInfo");
    const pr = this.user
      .get(`/user/${userId}`)
      .then((response) => response.data);
    return pr;
  };

  updateUserInfo = (data, userId) => {
    const pr = this.user.put(`/user/${userId}`, data);
    return pr;
  };
}

const userService = new UserService();

export default userService;
