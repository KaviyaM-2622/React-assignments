import { useState } from "react";

function TodoApp() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const addTask = () => {
    if (task.trim() !== "") {
      setTodos([...todos, task]);
      setTask(""); // clear input
    }
  };

  return (
    <div>
      <h2>To-Do App</h2>

      <input
        type="text"
        placeholder="Enter task"
        value={task}
        onChange={(e) => setTask(e.target.value)}/>

      <button onClick={addTask}>Add</button>

      <ul>
        {todos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
