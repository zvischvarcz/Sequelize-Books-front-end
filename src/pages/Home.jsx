import React from "react";
import { useState } from "react";
import { addBook, addAuthor, addGenre, updateBook, deleteBook } from "../utils";
import "../index.css";

const Home = () => {

const [title, setTitle] = useState("")
const [author, setAuthor] = useState("")
const [genre, setGenre] = useState("")
const [authorName, setAuthorName] = useState("")
const [genreName, setGenreName] = useState("")
const [column, setColumn] = useState("")
const [updateInput, setUpdateInput] = useState("")
const [updateTitle, setUpdateTitle] = useState("")
const [deleteTitle, setDeleteTitle] = useState("")
const [addBookRes, setAddBookRes] = useState("")
const [addAuthorRes, setAddAuthorRes] = useState("")
const [addGenreRes, setAddGenreRes] = useState("")
const [updateRes, setUpdateRes] = useState("")
const [deleteRes, setDeleteRes] = useState("")


const bookSubmitHandler = async (event) => {
  event.preventDefault();
  setAddBookRes( await addBook(title, author, genre));
  setTitle("")
  setAuthor("")
  setGenre("")
}
const authorSubmitHandler = async (event) => {
  event.preventDefault()
  setAddAuthorRes(await addAuthor(authorName));
  setAuthorName("")
}
const genreSubmitHandler = async (event) => {
  event.preventDefault()
  setAddGenreRes(await addGenre(genreName));
  setGenreName("")
}
const updateSubmitHandler = async (event) => {
  event.preventDefault()
  setUpdateRes(await updateBook(updateTitle, column, updateInput));
  setUpdateTitle("")
  setUpdateInput("")
}
const deleteBookHandler = async (event) => {
  event.preventDefault()
  setDeleteRes(await deleteBook(deleteTitle));
  setDeleteTitle("");
}
  return (
    <div>
      <div className="inputsContainer">
        <div className="formBox">
          <h1>Add a book</h1>
        
          <form onSubmit ={bookSubmitHandler}>
                <label> Book Title:
                    <br></br>
                    <input value={title} onChange={(event) => setTitle(event.target.value)} />
                </label>
                <br></br>
                <br></br>

                <label> Author:
                    <br></br>
                    <input value={author} onChange={(event) => setAuthor(event.target.value)} />
                </label>
                <br></br>
                <br></br>
                <label> Genre:
                    <br></br>
                    <input value={genre} onChange={(event) => setGenre(event.target.value)} />
                </label>
                <br></br>
                <br></br>
                <button type='submit'>Click here to add a book</button>
            </form>
            <p className="res">{addBookRes.message ===  "success" ? "Book successfully added" : addBookRes.message ===  "Validation error" ? "Book Already Exists" : addBookRes.message ===  "Cannot read properties of null (reading 'id')" ? "Error: Genre and/or author do not exist in database" : ""}</p>
          </div>
          <div className="formBox">
          <h1>Add an Author</h1>
        
        <form onSubmit ={authorSubmitHandler}>

              <label> Author:
                  <br></br>
                  <input value={authorName} onChange={(event) => setAuthorName(event.target.value)} />
              </label>
              <br></br>
              <br></br>
              <button type='submit'>Click here to add an Author</button>
          </form>
          <p className="res">{addAuthorRes.message ===  "success" ? "Author successfully added" : addAuthorRes.message ===  "Validation error" ? "Author Already Exists" : ""}</p>
          </div>
          <div className="formBox">
          <h1>Add a Genre</h1>
        
        <form onSubmit ={genreSubmitHandler}>
              <label> Genre:
                  <br></br>
                  <input value={genreName} onChange={(event) => setGenreName(event.target.value)} />
              </label>
              <br></br>
              <br></br>
              <button type='submit'>Click here to add a genre</button>
          </form>
          <p className="res">{addGenreRes.message ===  "success" ? "Genre successfully added" : addGenreRes.message ===  "Validation error" ? "Genre Already Exists" : ""}</p>
          </div>
      </div>
      <div className="lowerBox">
        <div className="formBox">
          <h1>Update a Book</h1>
        
          <form onSubmit ={updateSubmitHandler}>
            <label> Title:
              <br></br>
              <input value={updateTitle} onChange={(event) => setUpdateTitle(event.target.value)} />
            </label>
            <br></br>
            <br></br>
            <label> Column to change:
              <br></br>
              <label>
                <input onChange={(event) => setColumn(event.target.value)} type="radio" id="title" name="column" value="title" />
                &nbsp;Title 
              </label><br/>
              <label>
              <input onChange={(event) => setColumn(event.target.value)} type="radio" id="author" name="column" value="author" />
              &nbsp;Author
              </label><br/>
              <label>
                <input onChange={(event) => setColumn(event.target.value)} type="radio" id="genre" name="column" value="genre" />
                &nbsp;Genre
              </label>
            </label>
             <br></br>
            <br></br>
            <label> New {`${column}`}:
              <br></br>
              <input value={updateInput} onChange={(event) => setUpdateInput(event.target.value)} />
            </label>
            <br></br>
            <br></br>
            <button type='submit'>Update</button>
          </form>
          <p className="res">{updateRes.message === "Cannot read properties of null (reading 'id')" ? "The Author or Genre Specified is not in the database" : updateRes.changed === undefined ? "" : updateRes.changed[0] ===  1 ? "Update Successfull" : updateRes.changed[0] ===  0 ? "Update NOT successfull" : ""}</p>
        </div>
        <div className="formBox">
          <h1>Delete a book</h1>
            <form onSubmit ={deleteBookHandler}>
              <label> Title:
                  <br></br>
                  <input value={deleteTitle} onChange={(event) => setDeleteTitle(event.target.value)} />
              </label>
              <br></br>
              <br></br>
              <button type='submit'>Delete</button>
            </form>
            <p className="res">{deleteRes.amountDeleted ===  1 ? "Deleted Successfully" : deleteRes.amountDeleted ===  0 ? "Delete NOT successfull" : ""}</p>
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