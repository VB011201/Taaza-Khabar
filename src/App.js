import "./App.css";
import React, { Component } from "react";
import News from "./Components/News";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default class App extends Component {
  pageSize_ = 12

  render() {
    return (
      <>
      <Router>
        <Navbar/>
        <div className="container my-3">
          <Routes> 
           <Route  
           exact path="/"
           element={
           <News key = "general" category="general" pageSize={this.pageSize_} country="in" title="Top Headlines"/>}/>
           <Route 
           exact path="/business"
           element={<News key = "business" category="business" pageSize={this.pageSize_} country="in" title="Top Business Headlines"/>}/>
           <Route  
           exact path="/sports"
           element={<News key = "sports" category="sports" pageSize={this.pageSize_} country="in" title="Top Sports Headlines"/>}/>
           <Route  
           exact path="/technology"
           element={<News key = "technology" category="technology" pageSize={this.pageSize_} country="in" title="Top Technology Headlines"/>}/>
           <Route  
           exact path="/entertainment"
           element={<News key = "entertainment" category="entertainment" pageSize={this.pageSize_} country="in" title="Top Entertainment Headlines"/>}/>
           <Route  
           exact path="/health"
           element={<News key = "health" category="health" pageSize={this.pageSize_} country="in" title="Top Health Headlines"/>}/>
           <Route  
           exact path="/science"
           element={<News key = "science" category="science" pageSize={this.pageSize_} country="in" title="Top Science Headlines"/>}/>
          </Routes>
        </div>
        </Router>
      </>
    );
  }
}
