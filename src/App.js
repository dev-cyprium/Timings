import React, { Component } from 'react';

import Navigation from './components/layout/Header';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import PropsRoute from './components/router-ext/PropsRoute';

import Tasks from './components/Tasks';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navigation />

          <PropsRoute exact path='/' component={Tasks}/>
        </div>
      </Router>
    );
  }
}

export default App;
