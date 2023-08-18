import React from "react";
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from "./pages/home";
import GetAllBooks from './pages/GetAllBooks'
import GetBooksByAuthor from "./pages/BooksByAuthor";
import GetBooksByGenre from "./pages/BooksByGenre";
import "./index";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element= {<Home />}></Route>
        <Route path="/allBooks" element= {<GetAllBooks />}></Route>
        <Route path="/getBooksByGenre" element= {<GetBooksByGenre />}></Route>
        <Route path="/getBooksByAuthor" element= {<GetBooksByAuthor />}></Route>
      </Routes>
    </BrowserRouter>
        
  )  
  
}

export default App; 