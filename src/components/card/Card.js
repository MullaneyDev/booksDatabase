import React from "react";
import "./Card.css";
import { deleteBook } from "../../utils";

const Card = ({book, id, books, setBooks,index}) => {
    const deleteFromDB = async (e) => {
        e.preventDefault()
        await deleteBook(book.title)
        const archive = [...books]
        archive.splice(index,1)
        setBooks(archive)
    }

  return <div className="card" key={id}>
    <h1>{book.title}</h1>
    <h3>{book.author}</h3>
    <p>{book.genre}</p>
    <h3>£{book.price}</h3>
    <button onClick={deleteFromDB}>Delete book</button>
  </div>;
};

export default Card;
