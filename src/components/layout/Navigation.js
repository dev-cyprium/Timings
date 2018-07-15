import React from 'react';
import { Link } from 'react-router-dom';

import routes from '../router-ext/routes';

const Navigation = () => (
  <aside>
    <ul>
      <li>
        <Link to={routes.tasks}>Tasks</Link>
      </li>
      <li>
        <Link to={routes.mentors}>Mentors</Link>
      </li>
    </ul>
  </aside>
);

export default Navigation;