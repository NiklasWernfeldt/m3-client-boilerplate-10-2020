import axios from "axios";

class BookService {
  constructor() {
    this.book = axios.create({
      // baseURL: "http://localhost:5000/api", before heroku deployment
      baseURL: process.env.REACT_APP_API_URL + "/api", // setup deployment

      withCredentials: true,
    });
  }

  getAllBooks = () => {
    const pr = this.book.get("/startpage").then((response) => response.data);

    return pr;
  };

  getOneBook = (id) => {
    const pr = this.book.get(`/book/${id}`).then((response) => response.data);
    return pr;
  };

  addToFavorite = (id) => {
    const pr = this.book
      .post(`/books/favorites/${id}`)
      .then((response) => response.data);

    return pr;
  };

  addToReadList = (id) => {
    const pr = this.book
      .post(`/books/postpone/${id}`)
      .then((response) => response.data);

    return pr;
  };

  createBook = (data) => {
    const pr = this.book.post("/book/create", data);
    return pr;
  };

  getMyBooks = () => {
    const pr = this.book.get("/dashboard").then((response) => response.data);
    return pr;
  };

  // not in use
  updatedLastViewedPage = (page) => {
    const pr = this.book.put("/lastpage", { page });
    return pr;
  };

  createThePage = (bookId, data) => {
    const pr = this.book.post(`/createPage/${bookId}`, data);
    return pr;
  };

  uploadNewBook = (bookId, data) => {
    console.log("uploadNewBook");
    const pr = this.book.post(`/book/upload/${bookId}`, data);
    return pr;
  };

  getAllPublicBooks = () => {
    const pr = this.book
      .get("/books/publicbooks")
      .then((response) => response.data);
    return pr;
  };
}

const bookService = new BookService();

export default bookService;
