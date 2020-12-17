import axios from "axios";

class AuthorService {
  constructor() {
    this.author = axios.create({
      // baseURL: "http://localhost:5000/api", before heroku deployment
      baseURL: process.env.REACT_APP_API_URL + "/api", // setup deployment

      withCredentials: true,
    });
  }

  getAuthor = (id) => {
    const pr = this.author.get(`/${id}`).then((response) => response.data);
    return pr;
  };

  savePage = (pageid, data) => {
    const pr = this.author.put(`/book/editpage/${pageid}`, data);
    return pr;
  };
}

const authorService = new AuthorService();

export default authorService;
