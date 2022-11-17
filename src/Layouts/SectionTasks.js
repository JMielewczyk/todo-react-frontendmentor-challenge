import React from 'react'
import {Routes, Route} from 'react-router-dom'

import AllTasks from '../Pages/AllTasks'
import Active from '../Pages/Active'
import Completed from '../Pages/Completed'

import  '../Styles/SectionTasks.scss'

const SectionTasks = ({tasks, toggleCheckbox, deleteTask, tasksLength, clearCompleted}) => {
    return(
        <section className="section-tasks">
          <Routes>
            <Route path="/" element={<AllTasks tasks={tasks} toggleCheckbox={toggleCheckbox} deleteTask={deleteTask} />}></Route>
            <Route path="ActiveTasks" element={<Active tasks={tasks} toggleCheckbox={toggleCheckbox} deleteTask={deleteTask}/>}></Route>
            <Route path="CompletedTasks" element={<Completed tasks={tasks} toggleCheckbox={toggleCheckbox} deleteTask={deleteTask}/>}></Route>
          </Routes>
          <div className="section-tasks__tasks-info">
            <p>{tasksLength} items left</p>
            <p onClick={clearCompleted} >Clear Completed</p>
          </div>
        </section>)
    
}
export default SectionTasks;