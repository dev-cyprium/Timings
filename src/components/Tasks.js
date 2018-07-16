import React from 'react';

import TaskPanelInfo from './TaskPanel';

import "./tasks.css";

// TODO: rename TaskPAnel component to taskpanelinfo
class Tasks extends React.Component {
  render() {
    return (
      <div className="Tasks">
        <TaskPanelInfo label="Completed Tasks" val="15" color="neon-blue" />
        <TaskPanelInfo label="Pending Tasks"   val="4"  color="neon-blue" />
        <TaskPanelInfo label="Average Score"   val="78.2%" color="neon-green" />
        <TaskPanelInfo label="Taks per day"    val="0.3" color="neon-blue" />
      </div>
    )
  }
}

export default Tasks;