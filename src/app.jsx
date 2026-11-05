
import React, { useState } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  // Add Task
  const addTask = () => {
    if (task.trim() === "") {
      alert("Please enter a task!");
      return;
    }

    const newTask = {
      id: Date.now(),
      name: task,
      completed: false
    };

    setTasks([...tasks, newTask]);
    setTask("");
  };

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((item) => item.id !== id));
  };

  // Complete Task
  const completeTask = (id) => {
    setTasks(
      tasks.map((item) =>
        item.id === id
          ? { ...item, completed: !item.completed }
          : item
      )
    );
  };

  return (
    <div className="container">

      <h1>My To-Do List</h1>
      <p>Manage Your Daily Tasks</p>

      <div className="input-box">
        <input
          type="text"
          placeholder="Enter your task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") addTask();
          }}
        />

        <button onClick={addTask}>Add</button>
      </div>

      <ul>
        {tasks.map((item) => (
          <li key={item.id}>

            <span
              onClick={() => completeTask(item.id)}
              className={item.completed ? "completed" : ""}
            >
              {item.name}
            </span>

            <button
              className="delete-btn"
              onClick={() => deleteTask(item.id)}
            >
              Delete
            </button>

          </li>
        ))}
      </ul>

      <div className="footer">
        <h3>Total Tasks: {tasks.length}</h3>

        <h3>
          Completed: {
            tasks.filter((item) => item.completed).length
          }
        </h3>
      </div>

    </div>
  );
}

export default App;