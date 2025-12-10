import { useState } from "react";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <h2>Login Form</h2>

      <input
        type="email"
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}/>

      <br /><br />

      <input
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}/>

      <br /><br />

      <button onClick={() => alert(`Email: ${email}\nPassword: ${password}`)}>
        Login
      </button>
    </div>
  );
}

export default LoginForm;
