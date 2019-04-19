//packages
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//components
import Nav from './Components/Nav/Nav';
import Dashboard from './Components/Dashboard/Dashboard';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Dashboard />
      </div>
    );
  }
}

export default App;
