function UserList() {
  const users = [
    { id: 1, name: "Divya", age: 22 },
    { id: 2, name: "Kaviya", age: 24 },
    { id: 3, name: "Iniya", age: 28 },
  ];

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          {user.name} - {user.age} years old
        </li>
      ))}
    </ul>
  );
}

export default UserList;
