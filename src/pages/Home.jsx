import React from "react";
import { useState } from "react";
import { addBook, addAuthor, addGenre, updateBook } from "../utils";
import "../index.css";

const Home = () => {

const [title, setTitle] = useState()
const [author, setAuthor] = useState()
const [genre, setGenre] = useState()
const [authorName, setAuthorName] = useState()
const [genreName, setGenreName] = useState()
const [column, setColumn] = useState("")
const [updateInput, setUpdateInput] = useState()


const bookSubmitHandler = async (event) => {
  event.preventDefault()
  addBook(title, author, genre);
}
const authorSubmitHandler = async (event) => {
  event.preventDefault()
  addAuthor(authorName);
}
const genreSubmitHandler = async (event) => {
  event.preventDefault()
  addGenre(genreName);
}
const updateSubmitHandler = async (event) => {
  event.preventDefault()
  updateBook(title, column, updateInput);
}
  return (
    <div>
      <div className="inputsContainer">
        <div className="formBox">
          <h1>Add a book</h1>
        
          <form onSubmit ={bookSubmitHandler}>
                <label> Book Title:
                    <br></br>
                    <input onChange={(event) => setTitle(event.target.value)} />
                </label>
                <br></br>
                <br></br>

                <label> Author:
                    <br></br>
                    <input onChange={(event) => setAuthor(event.target.value)} />
                </label>
                <br></br>
                <br></br>
                <label> Genre:
                    <br></br>
                    <input onChange={(event) => setGenre(event.target.value)} />
                </label>
                <br></br>
                <br></br>
                <button type='submit'>Click here to add a book</button>
            </form>
          </div>
          <div className="formBox">
          <h1>Add an Author</h1>
        
        <form onSubmit ={authorSubmitHandler}>

              <label> Author:
                  <br></br>
                  <input onChange={(event) => setAuthorName(event.target.value)} />
              </label>
              <br></br>
              <br></br>
              <button type='submit'>Click here to add an Author</button>
          </form>
          </div>
          <div className="formBox">
          <h1>Add a Genre</h1>
        
        <form onSubmit ={genreSubmitHandler}>
              <label> Genre:
                  <br></br>
                  <input onChange={(event) => setGenreName(event.target.value)} />
              </label>
              <br></br>
              <br></br>
              <button type='submit'>Click here to add a genre</button>
          </form>
          </div>
      </div>
      <div className="lowerBox">
        <div className="formBox">
          <h1>Update a Book</h1>
        
          <form onSubmit ={updateSubmitHandler}>
            <label> Title:
              <br></br>
              <input onChange={(event) => setTitle(event.target.value)} />
            </label>
            <br></br>
            <br></br>
            <label> Column to change:
              <br></br>
              <label>
                <input onChange={(event) => setColumn(event.target.value)} type="radio" id="title" name="column" value="title" />
               Title 
              </label><br/>
              <label>
              <input onChange={(event) => setColumn(event.target.value)} type="radio" id="author" name="column" value="author" />
                Author
              </label><br/>
              <label>
                <input onChange={(event) => setColumn(event.target.value)} type="radio" id="genre" name="column" value="genre" />
                 Genre
              </label>
            </label>
             <br></br>
            <br></br>
            <label> New {`${column}`}:
              <br></br>
              <input onChange={(event) => setUpdateInput(event.target.value)} />
            </label>
            <br></br>
            <br></br>
            <button type='submit'>Update</button>
          </form>
        </div>
        <div className="linksBox">
          <a className="allBooksLink" href='/allBooks'>View all books</a>
          <a className="allBooksLink" href='/getBooksByAuthor'>View books by Author</a>
          <a className="allBooksLink" href='/getBooksByGenre'>View books by Genre</a>
        </div>
      </div>
    </div>
  );
};

export default Home;