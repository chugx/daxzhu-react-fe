/*
 * @Author: HideOnBush 
 * @Date: 2018-07-24 16:34:55 
 * @Last Modified by: HideOnBush
 * @Last Modified time: 2018-07-24 17:12:41
 */
import React, { Component } from 'react';
import './App.css';
import Header from './components/header'
import Nav from './components/nav'
import navList from './mock'
// import Footer from './components/footer'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Index from './views/index';
import Project from './views/project';
import About from './views/about';
import Music from './views/music';
import Code from './views/code';
import Think from './views/think';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Router>
          <div className="wrapper">
            <Nav navList={navList} />
            <div>
              <Route path="/index" component={Index}/>
              <Route path="/think" component={Think}/>
              <Route path="/about" component={About}/>
              <Route path="/code" component={Code}/>
              <Route path="/music" component={Music}/>
              <Route path="/project" component={Project}/>
            </div>
          </div>
        </Router>
        <footer>Copyright © daxzhu 2018 </footer>
      </div>
    );
  }
}

export default App;
