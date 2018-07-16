import React from 'react';

import Task from './Task';

const TaskList = () => (
  <div className="TaskList">
    <div className="TaskList__title">
      <h1>List of available tasks</h1>
    </div>
      <Task />
      <Task />
  </div>
);

export default TaskList;