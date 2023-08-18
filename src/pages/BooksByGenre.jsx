import React, { useState, useEffect } from "react";
import "../index.css";

const GetBooksByGenre = () => {
    const [books, setBooks] = useState([])
    const [genre, setGenre] = useState("")
    const [input, setInput] = useState("")


    useEffect(() => {
        if (genre) {
            const fetchData = async () => {
                try {
                    const booksRaw = await fetch(`http://localhost:5001/genres/getGenreAndBooks/${genre}`);
                    const data = await booksRaw.json();
                    const checkedData = data.GenreBooks === null ? {GenreBooks: {
                        Books: [{
                            title: "Genre not found in database",
                            author: "Please check your spelling or add it as a new genre"
                        
                        }]
                    }} : data;
                    setBooks(checkedData.GenreBooks.Books.length < 1 ? [{title: "There are no books found with that Genre"}] : checkedData.GenreBooks.Books);
                } catch (error) {
                    console.error("Error fetching data:", error);
                }
            };
            fetchData();
        }
    }, [genre]);
    

    return(
        <div>
            <div className="searchWrap">
                <input className="authorPageInput" onChange={(event) => {setInput(event.target.value)}}></input>
                <button className="authorPageButton" onClick={() => setGenre(input)}>Go</button>
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

export default GetBooksByGenre;