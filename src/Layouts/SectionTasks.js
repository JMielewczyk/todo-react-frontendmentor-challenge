import React, { useContext } from 'react'
import {Routes, Route} from 'react-router-dom'

import AllTasks from '../Pages/AllTasks'
import Active from '../Pages/Active'
import Completed from '../Pages/Completed'

import { ThemeContext } from '../App'

import  '../Styles/SectionTasks.scss'

const SectionTasks = ({tasks, toggleCheckbox, deleteTask, tasksLength, clearCompleted}) => {
  const theme = useContext(ThemeContext)
    return(
        <section className={theme === 'dark' ? "section-tasks" : "section-tasks light"}>
          <Routes>
            <Route path="/" element={<AllTasks tasks={tasks} toggleCheckbox={toggleCheckbox} deleteTask={deleteTask} />}></Route>
            <Route path="ActiveTasks" element={<Active tasks={tasks} toggleCheckbox={toggleCheckbox} deleteTask={deleteTask}/>}></Route>
            <Route path="CompletedTasks" element={<Completed tasks={tasks} toggleCheckbox={toggleCheckbox} deleteTask={deleteTask}/>}></Route>
          </Routes>
          <div className={theme === 'dark' ? "section-tasks__tasks-info" : "section-tasks__tasks-info light"}>
            <p>{tasksLength} items left</p>
            <p className='clearCompleted' onClick={clearCompleted}>Clear Completed</p>
          </div>
        </section>)
    
}
export default SectionTasks;