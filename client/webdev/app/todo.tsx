"use client";

import React, { useState } from "react";

export default function ToDo({ style }: { style?: React.CSSProperties }) {
  const [tasks, setTasks] = useState([
    { text: "Finish project status updates", completed: false },
    { text: "Prepare for team meeting", completed: false },
    { text: "Review new applications", completed: false },
    { text: "Update deadlines", completed: false },
  ]);
  const [newTask, setNewTask] = useState("");

  const toggleTask = (index: number) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const addTask = () => {
    if (newTask.trim() === "") return; 
    setTasks([...tasks, { text: newTask.trim(), completed: false }]);
    setNewTask("");
  };


  return (
    <div style={{ ...style, paddingLeft: "40px" }}>
      <h3
        style={{
          fontSize: "1.8rem",
          fontWeight: "800",
          marginBottom: "1rem",
          fontFamily: "Verdana",
          color: "black",
        }}
      >
        To-Do List
      </h3>

      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Add a new task"
        style={{
          padding: "8px",
          width: "250px",
          marginBottom: "10px",
          fontSize: "1rem",
          borderRadius: "4px",
          border: "1px solid #ccc",
          fontFamily: "Verdana",
        }}
      />
      <button
        onClick={addTask}
        style={{
          marginLeft: "10px",
          padding: "8px 16px",
          fontSize: "1rem",
          borderRadius: "4px",
          cursor: "pointer",
          fontFamily: "Verdana",
        }}
      >
        Add
      </button>

      <ul style={{ paddingLeft: "20px", listStyleType: "disc" }}>
        {tasks.map((task, index) => (
          <li
            key={index}
            onClick={() => toggleTask(index)}
            style={{
              cursor: "pointer",
              textDecoration: task.completed ? "line-through" : "none",
              color: task.completed ? "gray" : "black",
              fontFamily: "Verdana",
              fontSize: "1rem",
              marginBottom: "8px",
            }}
          >
            {task.text}
          </li>
        ))}
      </ul>
    </div>
  );
}