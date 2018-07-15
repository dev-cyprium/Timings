import React from 'react';
import { Link } from 'react-router-dom';

import routes from '../router-ext/routes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './navigation.css';

const Navigation = () => (
  <aside className='Navigation-navbar'>
    <ul>
      <li>
        <Link to={routes.tasks} className="d-flex align-items-center">
          <FontAwesomeIcon icon="tasks" />
          <span class="m-l-p33">Tasks</span>
        </Link>
      </li>
      <li>
        <Link to={routes.mentors}>Mentors</Link>
      </li>
    </ul>
  </aside>
);

export default Navigation;