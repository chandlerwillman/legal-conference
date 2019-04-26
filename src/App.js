//packages
import React, { Component } from 'react';
import { HashRouter } from 'react-router-dom';

//components
import Routes from './routes';
import Nav from './Components/Nav/Nav';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <Nav />
          {Routes}
        </div>
      </HashRouter>
    );
  }
}

export default App;
