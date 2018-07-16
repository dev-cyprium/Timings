import React from 'react';
import { Link } from 'react-router-dom';

import routes from '../router-ext/routes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './navigation.css';

import Profile from './Profile';

const IconLink = ({icon, label, ...rest}) => (
  <Link className="d-flex align-items-center" {...rest}>
    <FontAwesomeIcon icon={icon} />
    <span className="m-l-p33">{label}</span>
  </Link>
);

const IconLinkList = () => (
  <ul>
    <li>
      <IconLink label="Tasks" icon="tasks" to={routes.tasks} />
    </li>
    <li>
      <IconLink label="Mentors" icon="users" to={routes.mentors} />
    </li>
  </ul>
);

const Navigation = () => (
  <aside className='Navigation-navbar'>
    <Profile />
    <IconLinkList />
  </aside>
);

export default Navigation;