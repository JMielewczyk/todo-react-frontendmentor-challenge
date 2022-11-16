import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";

import Background from "./Layouts/Background";
import Header from "./Layouts/Header";

/* PAGES */

import AllTasks from "./Pages/AllTasks";
import Task from "./Layouts/Task";

/* STYLES */

import "./Styles/App.scss";

function App() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const handleAddTask = (e) => {
    e.preventDefault();
    setTasks({ text: inputValue });
    console.log(tasks);
  };

  const allTasks = tasks.map((task) => (
    <Task key={Date.now()} text={task.text} />
  ));
  return (
    <Router>
      <div className="App">
        <Background />
        <Header />
        <div className="input-wrapper">
          <form onSubmit={handleAddTask}>
            <input
              className="input-wrapper__input"
              type="text"
              placeholder="Create a new todo..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
          </form>
        </div>
        <section className="tasks-wrapper">
          <Routes>
            <Route path="/" element={<AllTasks tasks={allTasks} />}></Route>
          </Routes>
          <div className="tasks-wrapper__tasks-info">
            <p>items left</p>
            <p>Clear Completed</p>
          </div>
        </section>
        <div className="options">
          <NavLink to="/">All</NavLink>
          <NavLink to="ActiveTasks">Active</NavLink>
          <NavLink to="CompletedTasks">Completed</NavLink>
        </div>
      </div>
    </Router>
  );
}

export default App;
