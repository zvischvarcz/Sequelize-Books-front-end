import React, { useState, useEffect } from "react";
import "../index.css";

const GetBooksByAuthor = () => {
    const [books, setBooks] = useState([])
    const [author, setAuthor] = useState("")
    const [input, setInput] = useState("")


    useEffect(() => {
        if (author) {
            const fetchData = async () => {
                try {
                    const booksRaw = await fetch(`http://localhost:5001/authors/getAuthorAndBooks/${author}`);
                    const data = await booksRaw.json();
                    const checkedData = data.AuthorBooks === null ? {AuthorBooks: {
                        Books: [{
                            title: "Author not found in database",
                            author: "Please check your spelling or add it as a new author"
                        
                        }]
                    }} : data;
                    setBooks(checkedData.AuthorBooks.Books.length < 1 ? [{title: "There are no books found with that Author"}] : checkedData.AuthorBooks.Books);
                } catch (error) {
                    console.error("Error fetching data:", error);
                }
            };
            fetchData();
        }
    }, [author]);
   

    return(
        <div>
            <div className="searchWrap">
                <input className="authorPageInput" onChange={(event) => {setInput(event.target.value)}}></input>
                <button className="authorPageButton" onClick={() => setAuthor(input)}>Go</button>
            </div>
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
        </div>
    )

};

export default GetBooksByAuthor;