import React from 'react';

import "./tasks.css";
class Tasks extends React.Component {
  render() {
    return (
      <div className="Tasks">
        <div className="TasksPanel">
          <h3 className="TasksPanel__title">
            Completed tasks
          </h3>
          <p className="TasksPanel__completed">
            15
          </p>
        </div>
      </div>
    )
  }
}

export default Tasks;