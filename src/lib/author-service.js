import axios from "axios";

class AuthorService {
  constructor() {
    this.author = axios.create({
      baseURL: "http://localhost:5000/api/author",
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
