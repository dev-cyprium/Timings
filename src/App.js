import React, { Component } from 'react';

import routes from './components/router-ext/routes';
import Navigation from './components/layout/Navigation';
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

          <PropsRoute exact path={routes.tasks} component={Tasks} />
          <PropsRoute exact path={routes.mentors} component={Mentors} />
        </div>
      </Router>
    );
  }
}

export default App;
