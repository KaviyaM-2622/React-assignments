import { useState } from "react";

function ValidatedForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

 
    if (!name.trim() || !email.trim()) {
      setError("Please fill in all fields");
      return;
    }

    setError("");
    alert(`Name: ${name}\nEmail: ${email}`);
   
    setName("");
    setEmail("");
  };

  return (
    <div>
      <h2>Validated Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
            />
          </label>
        </div>

        <div>
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
          </label>
        </div>

        {error && <p style={{ color: "red" }}>{error}</p>}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ValidatedForm;
