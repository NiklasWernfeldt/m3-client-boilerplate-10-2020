import axios from "axios";

class UserService {
  constructor() {
    this.user = axios.create({
      baseURL: "http://localhost:5000/api",
      withCredentials: true,
    });
  }

  updateUserInfo = (data, userId) => {
    const pr = this.user.put(`/user/${userId}`, data);
    return pr;
  };
}

const userService = new UserService();

export default userService;
