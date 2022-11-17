import React from 'react'

import Task from '../Layouts/Task'

const Active = ({tasks, toggleCheckbox, deleteTask}) => {
    let filterActive = [...tasks]
    filterActive = filterActive.filter(task => task.isDone === false)
    filterActive = filterActive.map((task) => (
    <Task key={Math.floor(Math.random() * 100000)} id={task.id} text={task.text} isDone={task.isDone} toggleCheckbox={toggleCheckbox}  deleteTask={deleteTask}/>));

  return <div className="section-tasks__tasks-wrapper">{filterActive}</div>;
}

export default Active