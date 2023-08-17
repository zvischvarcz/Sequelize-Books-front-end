import React from "react";
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import GetAllBooks from './pages/GetAllBooks'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element= {<Home />}></Route>
        <Route path="/allBooks" element= {<GetAllBooks />}></Route>
      </Routes>
    </BrowserRouter>
        
  )  
  
}

export default App; 