import axios from "axios";

class BookService {
  constructor() {
    this.book = axios.create({
      baseURL: "http://localhost:5000/api",
      withCredentials: true,
    });
  }

  getAllBooks = () => {
    const pr = this.book.get("/startpage/").then((response) => response.data);

    return pr;
  };

  getOneBook = (id) => {
    const pr = this.book.get(`/book/${id}`).then((response) => response.data);
    return pr;
  };
}

const bookService = new BookService();

export default bookService;
