import { useState } from "react";

function Password() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const passwordsMatch = password === confirmPassword;

  return (
    <div>
      <div>
        <h2>Password</h2>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Confirm Password:
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </label>
      </div>
      {confirmPassword && (
        <p style={{ color: passwordsMatch ? "green" : "red" }}>
          {passwordsMatch ? "Passwords match" : "Passwords do not match"}
        </p>
      )}
    </div>
  );
}

export default Password;
