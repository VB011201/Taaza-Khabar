import "./App.css";
import React, { Component } from "react";
import News from "./Components/News";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  pageSize_ = 12;
  apiKey = '805e49bf6ffe44e3b79a98b2b59de878';
state ={
  progress:0
}
setProgress=(progress)=>{
this.setState({
  progress:progress
})
}
  render() {
    return (
      <>
      <Router>
        <LoadingBar
                color='#f11946'
                progress={this.state.progress}/>
        <Navbar/>
        <div className="container my-3">
          <Routes> 
           <Route  
           exact path="/"
           element={
           <News progress = {this.setProgress} apiKey = {this.apiKey} key = "general" category="general" pageSize={this.pageSize_} country="in" title="Top Headlines"/>}/>
           <Route 
           exact path="/business"
           element={<News progress = {this.setProgress} apiKey = {this.apiKey} key = "business" category="business" pageSize={this.pageSize_} country="in" title="Top Business Headlines"/>}/>
           <Route  
           exact path="/sports"
           element={<News progress = {this.setProgress} apiKey = {this.apiKey} key = "sports" category="sports" pageSize={this.pageSize_} country="in" title="Top Sports Headlines"/>}/>
           <Route  
           exact path="/technology"
           element={<News progress = {this.setProgress} apiKey = {this.apiKey} key = "technology" category="technology" pageSize={this.pageSize_} country="in" title="Top Technology Headlines"/>}/>
           <Route  
           exact path="/entertainment"
           element={<News progress = {this.setProgress} apiKey = {this.apiKey} key = "entertainment" category="entertainment" pageSize={this.pageSize_} country="in" title="Top Entertainment Headlines"/>}/>
           <Route  
           exact path="/health"
           element={<News progress = {this.setProgress} apiKey = {this.apiKey} key = "health" category="health" pageSize={this.pageSize_} country="in" title="Top Health Headlines"/>}/>
           <Route  
           exact path="/science"
           element={<News progress = {this.setProgress} apiKey = {this.apiKey} key = "science" category="science" pageSize={this.pageSize_} country="in" title="Top Science Headlines"/>}/>
          </Routes>
        </div>
        </Router>
      </>
    );
  }
}
