import React from "react";
import { useState, useEffect } from "react";

const GetAllBooks = () => {
    const [books, setBooks] = useState([])

    useEffect(() => {
    const fetchData = async () => {
        const books = await fetch("http://localhost:5001/books/getAllBooks");
        const data = await books.json();
        setBooks(data.books)
    }
    fetchData();
    }, [])
    useEffect(() => {
        console.log(books)
        }, [books])

    return(
        <div className="booksBox">
            {books.map((book, index) => {
                return (
                    <div key={index} className="eachBookBox">
                        <h3>{book.title}</h3>
                        <h4>{book.author}</h4>
                        <h4>{book.genre}</h4>
                    </div>
                )
            })}
        </div>
    )

};

export default GetAllBooks;











