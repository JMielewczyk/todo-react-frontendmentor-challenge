import React from "react";

import "../Styles/SectionTasks.scss";

const Task = ({ id, text, isDone, toggleCheckbox, deleteTask }) => {
  const taskDone = isDone ? <img src="./images/icon-check.svg" alt="" /> : null;
  const checkboxClass = isDone
    ? "section-tasks__task-checkbox isDone"
    : "section-tasks__task-checkbox";

  return (
    <div className="section-tasks__task">
      <div className={checkboxClass} onClick={() => toggleCheckbox(id)}>
        {taskDone}
      </div>
      <p
        className={
          isDone === true
            ? "section-tasks__task-text isDone"
            : "section-tasks__task-text"
        }
      >
        {text}
      </p>
      <div onClick={() => deleteTask(id)}>
        <img src="./images/icon-cross.svg" alt=""></img>
      </div>
    </div>
  );
};

export default Task;
