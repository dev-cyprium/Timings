import React from 'react';

const resolveClasses = (color) => {
  let classList = ["TaskPanel__completed"];
  if(color) 
    classList.push(`TaskPanel__completed--${color}`);
  return classList.join(" ");
} 

const TaskPanel = ({label, val, color = null}) => {
  const classList = resolveClasses(color);
  return (
    <div className="TaskPanel">
      <h3 className="TaskPanel__title">
        {label}
      </h3>
      <p className={resolveClasses(color)}>
        {val}
      </p>
    </div>
  );
};

export default TaskPanel;
