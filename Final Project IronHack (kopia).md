Bookway

Description

This is a platform where users can write and upload their books directly, read other peoples books.  

Users Stories 

- Homepage: As an anon I can look upp what this app is, how it works, and who its for.

- Signup: As an anon I can sign up in the platform so that I can start reading and writing books.

- Login: As a user I can login to the platform so that I can read and write.

- Logout: As a user I can logut from the platform so no one else can use it.

- Start page: As a user I can select a book to read from diffrent categories.

- Book details page: As a user I can look up additional information, I can choose to read the book right away, or add it to my "Read later list", or favorite it if you have read the book. I can click to navigate to the author to see other books from that author.

- Read mode: As a user I can read a book, I can bookmark a page, the book will then be stored in my "Now Reading". When I open the book agian it will be from the bookmarked page. 

- Write mode: As a user I can write my own books, I can select diffrent font-familys and font-sizes.  I can upload a image to the page, either as a background or simply add it to the page. As a user I can save the progress of what I has written.

- My books page: As a user I can view my books and its status (in progress, uploaded)

- My book: If writing in progress I can delete the book, i can click edit and be navigated to Write mode. As a user I can upload a book if I choose to do so.

- My profile page: I can see how much money the books bring in.

- My dashboard page: As a user I get an overview on this page, the books Im currently reading, my own written books, My favorite books and the books I have yet to read.

  

  Backlog

  - Make it possible to edit your profile
  - ...

  ---

  Client / Frontend

  ---

  React Router Routes (React App)

  ---

  |      Path       |  Component  |           Permission           |                          Behaviour                           |
  | :-------------: | :---------: | :----------------------------: | :----------------------------------------------------------: |
  |        /        |  HomePage   |      Public ```<Route>```      |                          Home page.                          |
  |     /signup     | SignupPage  |  Anon only ```<AnonRoute>```   | Signup form, link to login, navigates to homepage after signup. |
  |     /login      |  LoginPage  |  Anon only ```<AnonRoute>```   | Login form, link to signup, navigates to homepage after login. |
  |     /start      |  StartPage  | User only ```<PrivateRoute>``` | Displays multiple category arrays and navbar, clicking on a book navigates to Book Details Page. |
  |    /profile     | ProfilePage | User only ```<PrivateRoute>``` | View earned money, view user information and edit user information. |
  |   /dashboard    |  Dashboard  | User only ```<PrivateRoute>``` | Displays 4 arrays: "Now reading", "My books", "My favorite books", "Readlist". |
  |     /write      |    Write    | User only ```<PrivateRoute>``` |                      Write a book page.                      |
  |    /book/:id    |    Book     | User only ```<PrivateRoute>``` |         Bookinformation, and call to action-buttons.         |
  |   /author/:id   |   Author    | User only ```<PrivateRoute>``` |     Displays the Author details and authors books array.     |
  | /book/:id/:page |    Read     | User only ```<PrivateRoute>``` |           Displays book page, and bookmark button.           |
  |  /write (plus)  |  WritePage  | User only ```<PrivateRoute>``` |                   Displays the write page                    |
  |    /progress    | ProgressBtn | User only ```<PrivateRoute>``` |       Opens a form to save the current book progress.        |
  |   /mybook/:id   |   MyBook    | User only ```<PrivateRoute>``` |         Views a book and crud options and upload opt         |
  |                 |             |                                |                                                              |



Components 

---

- HomePage
- SignupPage
- LoginPage
- StartPage
- ProfilePage
- Dashboard
- Write
- Writepanel
- SaveBook
- Book
- BookArray
- FavoriteBtn
- ReadlistBtn
- Author
- Read
- BookmarkBtn
- SaveBtn
- UploadBtn
- MyBook
- Navbar

Services

---

Auth Service

---

- auth.login(user)
- auth.signup(user)
- auth.logout()
- auth.me()

---

Book Service

---

- book.bookmark()
- book.favorite() ???
- book.postpone() ??
- book.save() ??
- book.edit() ??
- book.upload() ??
- book.delete() ??

---

Proflie Services (backlog)

----

- profileEmail.edit() ?? (backlog)

- profileImage.edit() ?? (backlog)

- profilePassword.edit() ?? (backlog)

  







Models

---

User model

```node
{
 firstname: {type: String, required: true},
 lastname: {type: String, required: true},
 email: {type: String, required: true, unique: true},
 password: {type: String, required: true},
 profileImage: {type: String},
 isAuthor: {type: Boolean, default: false}
 ownBooks: [{type: Schema.Types.ObjectId, ref: "Book"}],
 nowReading: [{type: Schema.Types.ObjectId, ref: "Book"}],
 favoriteBooks: [{type: Schema.Types.ObjectId, ref: "Book"}],
 readList: [{type: Schema.Types.ObjectId, ref: "Book"}],
 bookmarks: [{type: Schema.Types.ObjectId, ref: "Bookmark"}]
}
```

---

Book model

```node
{
title: {type: String, required: true},
description: {type: String, required: true},
genre: {type: String, required: true},
views: {type: Number},
earnedCash: {type: Number},
coverImage: {type: String, required: true},
pages: [{type: Schema.Types.ObjectId, ref: "Page"}],
author: {type: Schema.Types.ObjectId, ref: "User"} 
}
```

---

Page model

```node
{
pageNumber: {type: Number},
text: {type: String},
pageImage: {type: String},
book: {type: Schema.Types.ObjectId, ref: "Book"}
}
```

---

Bookmark model

```node
{
book: {type: Schema.Types.ObjectId, ref: "Book"},
bookmarkPage: {type: Number}
}
```

---

API Endpoints (backend routes)

---

| HTTP Method |                             URL                              | Request Body                            | Success status | Error status |                         Description                          |
| :---------: | :----------------------------------------------------------: | --------------------------------------- | :------------: | :----------: | :----------------------------------------------------------: |
|     GET     |                           /auth/me                           | Saved session                           |      200       |     404      | Responsible for checking on every PrivateRoute if the user is logged in COMPLETED |
|    POST     |                         /auth/signup                         | {firstname, lastname, email, password}  |      201       |     404      | Checks if fields not empty (422) and user not exists (409), then create user with encrypted password, and store user in session COMPLETED |
|    POST     |                         /auth/login                          | {username, password}                    |      200       |     401      | Checks if fields not empty (422), if user exists (404), and if password matches (404), then stores user in session COMPLETED |
|     GET     |                         /auth/logout                         | (empty)                                 |      204       |     400      |                 Logs out the user COMPLETED                  |
|     GET     |                        /api/dashboard                        |                                         |      204       |     400      |                 get dashboard data COMPLETED                 |
|    POST     |               /api/book/edit/:bookId (rename)                | {text, pageImage} query {pagenr}        |      204       |     400      |                  Creates new page COMPLETED                  |
|     GET     |                        /api/books/:id                        |                                         |      201       |     400      |                   Get book data COMPLETED                    |
|     GET     |                   /api/books/readboard/:id                   |                                         |      204       |     400      |    Get book and page data, and (indexOf bookmark) BACKLOG    |
|    POST     |                   /api/books/postpone/:id                    | {bookid}                                |                |              |           Saves the book to "Read list" COMPLETED            |
|    POST     |                   /api/books/favorite/:id                    | {bookid}                                |                |              |            Saves the book to "Favorites"COMPLETED            |
|     GET     |                       /api/author/:id                        |                                         |                |              |                  Get Authors data COMPLETED                  |
|    POST     |                  /api/book/bookmark/:bookid                  | {bookid, pageNr}                        |                |              |                  Save the bookmark BACKLOG                   |
|             |                                                              |                                         |                |              |                                                              |
|     GET     | /api/startpage (change this to get all the books from Public model) |                                         |                |              |               Get all the books data COMPLETED               |
|    POST     |                   /api/book/upload/:bookid                   | {bookid}                                |                |              |             Uploads a book (new model) COMPLETED             |
|   DELETE    |                        /api/books/:id                        |                                         |                |              |                   Deletes a book COMPLETED                   |
|     PUT     |                        /api/books/:id                        | {title, description, genre, coverImage} |                |              |       Updates a book's information and cover COMPLETED       |
|    POST     |                       /api/book/create                       | {title, description, genre, coverImage} |                |              | Click the plus and create book, (on the frontend is should navigate to the edit book page) COMPLETED |
|     PUT     |                  /api/book/editpage/:pageid                  | {text, pageImage}                       |                |              |                     Edit page COMPLETED                      |
|     GET     |                      /api/book/:pageid                       |                                         |                |              | that gives a single page, two purposes, one for writing and one for reading COMPLETED |



[Trello Link](https://trello.com/b/Sr7B8WDo/final-project)

[Figma Link](https://www.figma.com/file/IYXgSOca3vRzWEuOOhhPut/Untitled?node-id=0%3A1)

