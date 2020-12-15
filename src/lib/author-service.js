import axios from "axios";

class AuthorService {
  constructor() {
    this.author = axios.create({
      // baseURL: "http://localhost:5000", before heroku deployment
      baseURL: process.env.REACT_APP_API_URL, // setup deployment

      withCredentials: true,
    });
  }

  getAuthor = (id) => {
    const pr = this.author.get(`/${id}`).then((response) => response.data);
    return pr;
  };
}

const authorService = new AuthorService();

export default authorService;
