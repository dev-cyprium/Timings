import React from 'react';

const TaskPanel = ({label, val}) => (
  <div className="TasksPanel">
    <h3 className="TasksPanel__title">
      {label}
    </h3>
    <p className="TasksPanel__completed">
      {val}
    </p>
  </div>
);

export default TaskPanel;
