import React from "react";
import { useState, useEffect } from "react";
import "../index.css";

const GetAllBooks = () => {
    const [books, setBooks] = useState([])

    useEffect(() => {
    const fetchData = async () => {
        try {  
            const books = await fetch("http://localhost:5001/books/getAllBooks");
            const data = await books.json();
            setBooks(data.books)
        }catch (error) {
            console.error("Error fetching data:", error);
        }
    }
    fetchData();
    }, [])
   
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











