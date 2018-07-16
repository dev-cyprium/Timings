import React, { Component } from 'react';

import routes from './router-ext/routes';
import Navigation from './layout/Navigation';
import { BrowserRouter as Router } from 'react-router-dom';
import PropsRoute from './router-ext/PropsRoute';

import Tasks from './task/Tasks';
import Mentors from './mentor/Mentors';

/* Font Awesome */
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTasks, faUsers } from '@fortawesome/free-solid-svg-icons'

library.add(faTasks);
library.add(faUsers);

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
