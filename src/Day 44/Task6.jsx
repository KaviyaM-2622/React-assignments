function TodoList() {
  const todos = [
    { id: 1, task: "Learn React" },
    { id: 2, task: "Practice JSX" },
    { id: 3, task: "Build a Todo App" },
  ];

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.task}</li>
      ))}
    </ul>
  );
}

export default TodoList;
