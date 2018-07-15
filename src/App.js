import React, { Component } from 'react';

import routes from './components/router-ext/routes';
import Navigation from './components/layout/Navigation';
import { BrowserRouter as Router } from 'react-router-dom';
import PropsRoute from './components/router-ext/PropsRoute';

import Tasks from './components/Tasks';
import Mentors from './components/Mentors';

/* Font Awesome */
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTasks } from '@fortawesome/free-solid-svg-icons'

library.add(faTasks);

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navigation />
          <div className="content">
            <PropsRoute exact path={routes.tasks} component={Tasks} />
            <PropsRoute exact path={routes.mentors} component={Mentors} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
