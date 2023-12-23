import "./App.css";
import React, { Component } from "react";
import News from "./Components/News";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <>
      <Router>
        <Navbar/>
        <div className="container my-3">
          <h1 className="text-center display-1">
            <strong>Latest Headlines</strong>
          </h1>
        </div>
        <div className="container my-3">
          <Routes> 
           <Route 
           path="/"
           element={<News category="general" pageSize="12" country="in"/>}/>
          </Routes>
        </div>
        </Router>
      </>
    );
  }
}
