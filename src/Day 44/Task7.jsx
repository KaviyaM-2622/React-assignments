function Todo() {
  const todos = []; 

  return (
    <div>
      {todos.length === 0 ? (
        <p>No Todos yet</p>
      ) : (
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>{todo.task}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Todo;
