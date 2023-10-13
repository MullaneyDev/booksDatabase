import React from "react";
import "./CardContainer.css";
import { useState } from "react";
import {
  getAllBooks,
  addBook,
  getBooksByAuthor,
  getBooksByPrice,
  getBooksByTitle,
} from "../../utils";
import Card from "../card/Card";

const CardContainer = ({books, setBooks}) => {
  
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");
  const [price, setPrice] = useState("");
  const [searchAuthor, setSearchAuthor] = useState("");
  const [searchLow, setSearchLow] = useState("");
  const [searchHigh, setSearchHigh] = useState("");
  const [searchTitle, setSearchTitle] = useState("");

  const handleClick = async (e) => {
    e.preventDefault();
    const books = await getAllBooks();
    setBooks(books.getBooks);
  };
  const authorSearch = async (e) => {
    e.preventDefault();
    const books = await getBooksByAuthor(searchAuthor);
    setBooks(books.findBookByAuthor);
  };

  const addBookToDB = async (e) => {
    e.preventDefault();
    const addedBook = await addBook(title, author, genre, price);
    await setBooks([...books, addedBook.newBook]);
  };

  const handleChange = async (e, setter) => {
    e.preventDefault();
    setter(e.target.value);
  };
  const searchPrice = async (e) => {
    e.preventDefault();
    const books = await getBooksByPrice(searchLow, searchHigh);
    setBooks(books.findBookByPrice);
  };
  const titleSearch = async (e) => {
    e.preventDefault();
    const books = await getBooksByTitle(searchTitle);
    setBooks(books.getBook);
  };
  return (
    <>
      <div className="searchBar">
        <form onSubmit={authorSearch}>
          <input
            type="text"
            onChange={(e) => handleChange(e, setSearchAuthor)}
          />
          <button type="submit">Search Author</button>
        </form>
        <form onSubmit={titleSearch}>
          <input
            type="text"
            onChange={(e) => handleChange(e, setSearchTitle)}
          />
          <button type="submit">Search Title</button>
        </form>
        <form onSubmit={searchPrice}>
          <input
            type="text"
            placeholder="low price"
            onChange={(e) => handleChange(e, setSearchLow)}
          />
          <input
            type="text"
            placeholder="high price"
            onChange={(e) => handleChange(e, setSearchHigh)}
          />
          <button type="submit">Search by Price</button>
        </form>
      </div>
      <div className="card-container">
        <button className="getBooksBtn" onClick={handleClick}>
          Get all Books
        </button>
        {books.length > 0
          ? books.map((book, index) => <Card book={book} key={book._id} books={books} setBooks={setBooks} index={index}/>)
          : null}
      </div>
      <div className="addBar">
        <h3>Add a new book</h3>
        <form onSubmit={addBookToDB}>
          <input
            type="text"
            id="title"
            placeholder="Title"
            onChange={(e) => handleChange(e, setTitle)}
          />
          <input
            type="text"
            id="Author"
            placeholder="Author"
            onChange={(e) => handleChange(e, setAuthor)}
          />
          <input
            type="text"
            id="genre"
            placeholder="Genre"
            onChange={(e) => handleChange(e, setGenre)}
          />
          <input
            type="text"
            id="price"
            placeholder="Price"
            onChange={(e) => handleChange(e, setPrice)}
          />
          <button type="submit">Add Book</button>
        </form>
      </div>
    </>
  );
};

export default CardContainer;
