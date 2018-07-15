import React from 'react';
import { Link } from 'react-router-dom';

import routes from '../router-ext/routes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './navigation.css';

const IconLink = ({icon, label, ...rest}) => (
  <Link className="d-flex align-items-center" {...rest}>
    <FontAwesomeIcon icon={icon} />
    <span class="m-l-p33">{label}</span>
  </Link>
);

const Navigation = () => (
  <aside className='Navigation-navbar'>
    <ul>
      <li>
        <IconLink label="Tasks" icon="tasks" to={routes.tasks} />
      </li>
      <li>
        <IconLink label="Mentors" icon="users" to={routes.mentors} />
      </li>
    </ul>
  </aside>
);

export default Navigation;