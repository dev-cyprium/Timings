import React from 'react';

import TaskPanelInfo from './TaskPanel';
import TaskList from './TaskList';

import "./tasks.css";

const tasks = [
  {
    name: "Task #1",
    author: "Stefan Kuprešak",
    langs: ["JavaScript", "HTML", "CSS"],
    libs: ["React"],
    difficulty: {
      rate: 3,
      max_rate: 5
    }
  }
]

// TODO: rename TaskPAnel component to taskpanelinfo
class TaskView extends React.Component {
  render() {
    return (
      <div>
        <div className="Panel">
          <TaskPanelInfo label="Completed Tasks" val="15"    color="neon-blue" />
          <TaskPanelInfo label="Pending Tasks"   val="4"     color="neon-blue" />
          <TaskPanelInfo label="Average Score"   val="78.2%" color="neon-green" />
          <TaskPanelInfo label="Taks per day"    val="0.3"   color="neon-blue" />
        </div>
        <div className="Panel Panel--background">
          <TaskList tasks={tasks} />
        </div>
      </div>
    )
  }
}

export default TaskView;