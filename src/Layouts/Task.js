import React, { useContext } from "react";

import { ThemeContext } from "../App";

import "../Styles/SectionTasks.scss";

import iconCheckbox from "../Images/icon-check.svg"
import iconCross from "../Images/icon-cross.svg"

const Task = ({ id, text, isDone, toggleCheckbox, deleteTask }) => {
  const taskDone = isDone ? <img src={iconCheckbox} alt="" /> : null;
  const theme = useContext(ThemeContext)
  const checkboxClass = isDone
    ? `section-tasks__task-checkbox isDone ${theme === 'dark' ? null : 'light'}`
    : `section-tasks__task-checkbox ${theme === 'dark' ? null : 'light'}`;
  return (
    <div className={theme === 'dark' ? "section-tasks__task" : "section-tasks__task light"}>
      <div className={checkboxClass} onClick={() => toggleCheckbox(id)}>
        {taskDone}
      </div>
      <p
        className={
          isDone === true
            ? `section-tasks__task-text isDone ${theme === 'dark' ? null : 'light'}`
            : `section-tasks__task-text ${theme === 'dark' ? null : 'light'}`
        }
      >
        {text}
      </p>
      <div className="section-tasks__task-cross" onClick={() => deleteTask(id)}>
        <img src={iconCross} alt=""></img>
      </div>
    </div>
  );
};

export default Task;
