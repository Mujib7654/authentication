import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Error from "./components/Error";

const App = () => {
  return (
    <>
      <Router>
      <Navbar />
          <Routes>
            <Route path="/" element= { <Home />} />
            <Route path="/about" element= { <About />} />
            <Route path="/contact" element= { <Contact />} />
            <Route path="/login" element= { <Login />} />
            <Route path="/signup" element= { <Signup />} />
            <Route path="*" element= { <Error />} />
          </Routes>
      </Router>
    </>
  )
}

export default App;