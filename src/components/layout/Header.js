import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => (
  <aside>
    <ul>
      <li>
        <Link to="/tasks">Tasks</Link>
      </li>
      <li>
        <Link to="/mentors">Mentors</Link>
      </li>
    </ul>
  </aside>
);

export default Navigation;