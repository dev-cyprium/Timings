import React from 'react';

import Task from './Task';

const TaskList = () => (
  <div className="TaskList">
    <h3 className="TaskList__title">List of available tasks</h3>
    <div className="TaskList__head">
      <p>Task</p>
      <p>User</p>
      <p>Date</p>
      <p>Details</p>
    </div>
    <div className="TaskList__body">
      <Task />
      <Task />
      <Task />
    </div>
  </div>
);

export default TaskList;