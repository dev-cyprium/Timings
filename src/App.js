import React, { Component } from 'react';

/* Dependencies */
import routes from './router-ext/routes';
import Navigation from './layout/Navigation';
import { BrowserRouter as Router } from 'react-router-dom';
import PropsRoute from './router-ext/PropsRoute';

/* Main Application Views */
import TaskView from './task/TaskView';
import Mentors from './mentor/Mentors';

/* Font Awesome */
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTasks, faUsers } from '@fortawesome/free-solid-svg-icons'

// TODO: move to a seperate class that adds to the library
library.add(faTasks);
library.add(faUsers);

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navigation />
          <div className="content">
            <PropsRoute exact path={routes.tasks} component={TaskView} />
            <PropsRoute exact path={routes.mentors} component={Mentors} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
