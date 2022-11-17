import React, {useCallback} from "react";

import Task from '../Layouts/Task'

const AllTasks = ({ tasks, toggleCheckbox, deleteTask}) => {

const allTasks = tasks.map((task) => (
  <Task key={Math.floor(Math.random() * 100000)} id={task.id} text={task.text} isDone={task.isDone} toggleCheckbox={toggleCheckbox}  deleteTask={deleteTask}/>));  

  return <div className="section-tasks__tasks-wrapper">{allTasks}</div>;
};

export default AllTasks
