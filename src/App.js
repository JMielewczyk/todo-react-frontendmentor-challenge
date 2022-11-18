import React, { useState } from "react";
import { BrowserRouter as Router, NavLink } from "react-router-dom";

/* Layouts */

import Background from "./Layouts/Background";
import Header from "./Layouts/Header";
import SectionTasks from "./Layouts/SectionTasks";

/* STYLES */

import "./Styles/App.scss";

export const ThemeContext = React.createContext();

function App() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [theme, setTheme] = useState("light");

  const handleTheme = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };

  const handleAddTask = (e) => {
    e.preventDefault();
    setTasks([
      ...tasks,
      {
        id: Math.floor(Math.random() * 1000000),
        text: inputValue,
        isDone: false,
      },
    ]);
  };

  const toggleIsDoneTask = (id) => {
    const newArray = [...tasks];
    newArray.forEach((task) => {
      if (task.id === id) {
        task.isDone = !task.isDone;
      }
    });
    setTasks([...newArray]);
  };

  const deleteTask = (id) => {
    let newArray = [...tasks];
    newArray = newArray.filter((task) => task.id !== id);
    setTasks([...newArray]);
  };

  const clearCompleted = () => {
    let newArray = [...tasks];
    newArray = newArray.filter((task) => task.isDone === false);
    setTasks([...newArray]);
  };

  return (
    <Router>
      <ThemeContext.Provider value={theme}>
        <div className="App">
          <Background />
          <Header handleTheme={handleTheme} />
          <div className="input-wrapper">
            <form onSubmit={handleAddTask}>
              <input
                className={
                  theme === "dark"
                    ? "input-wrapper__input"
                    : "input-wrapper__input light"
                }
                type="text"
                placeholder="Create a new todo..."
                value={inputValue}
                onChange={(e) => {
                  setInputValue(e.target.value);
                }}
              />
            </form>
          </div>
          <SectionTasks
            tasks={tasks}
            toggleCheckbox={toggleIsDoneTask}
            deleteTask={deleteTask}
            tasksLength={tasks.length}
            clearCompleted={clearCompleted}
          />
          <div className={theme === "dark" ? "options" : "options light"}>
            <NavLink to="/All">All</NavLink>
            <NavLink to="ActiveTasks">Active</NavLink>
            <NavLink to="CompletedTasks">Completed</NavLink>
          </div>
        </div>
      </ThemeContext.Provider>
    </Router>
  );
}

export default App;
