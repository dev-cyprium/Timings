import React from 'react';

import TaskPanel from './TaskPanel';

import "./tasks.css";
class Tasks extends React.Component {
  render() {
    return (
      <div className="Tasks">
        <TaskPanel label="Completed Tasks" val="15" />
        <TaskPanel label="Pending Tasks"   val="4" />
        <TaskPanel label="Average Score"   val="78.2%" />
      </div>
    )
  }
}

export default Tasks;