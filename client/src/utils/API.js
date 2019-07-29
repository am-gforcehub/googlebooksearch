import axios from "axios";
import APIKEY from "../../src/config/keys";
const URL = "https://www.googleapis.com/books/v1/volumes?q=";

export default {
  searchBooks: function(query) {
    console.log(query);
    return axios.get(URL + query + APIKEY);
  },

  //   searchBook: function(term) {
  //     // return axios.get("/api/search/" + term);
  //      return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + term + "&key=" + KEY);
  //   }
  // };
  // Gets all books
  getBooks: function() {
    return axios.get("/api/books");
  },
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  }
};
