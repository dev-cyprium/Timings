import React from 'react';

import TaskPanel from './TaskPanel';

import "./tasks.css";
class Tasks extends React.Component {
  render() {
    return (
      <div className="Tasks">
        <TaskPanel label="Completed Tasks" val="15" color="neon-blue" />
        <TaskPanel label="Pending Tasks"   val="4"  color="neon-blue" />
        <TaskPanel label="Average Score"   val="78.2%" color="neon-green" />
        <TaskPanel label="Taks per day"    val="0.3" color="neon-blue" />
      </div>
    )
  }
}

export default Tasks;