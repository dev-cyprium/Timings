import React, { Component } from 'react';

import Navigation from './components/layout/Header';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import PropsRoute from './components/router-ext/PropsRoute';

import Tasks from './components/Tasks';
import Mentors from './components/Mentors';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navigation />

          <PropsRoute exact path='/tasks' component={Tasks} />
          <PropsRoute exact path='/mentors' component={Mentors} />
        </div>
      </Router>
    );
  }
}

export default App;
