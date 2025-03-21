import { useState, useEffect, Key } from "react";

function ToDo() {
    const [tasks, setTasks] = useState<{ id: number; text: string; completed: boolean }[]>([]);
    const [newTask, setNewTask] = useState("");
  
    const addTask = () => {
      if (newTask.trim() !== "") {
        setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
        setNewTask("");
      }
    };
  
    const toggleTask = (taskId: number) => {
      setTasks(tasks.map(task => (task.id === taskId ? { ...task, completed: !task.completed } : task)));
    };
    return(
        <div className="todo-display">
            {/* fix the lexbos on the search display */}
            <div className="card-header">
            <p className="title">ToDos</p>
            <input
                type = 'text'
                placeholder="Add a new task..."
                value = {newTask}
                onChange = {(e) => setNewTask(e.target.value)}
                />
                <button onClick = {addTask} className="bg-blue-500 text-white px-4 py-2 rounded-lg">
                Add
                </button>
            </div>
    </div>
  );
};

export default ToDo;