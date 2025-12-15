import { useState } from "react";

function ProfileUpdateForm() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <div style={{ display: "flex", gap: "50px" }}>
   
      <form style={{ flex: 1 }}>
        <h2>Update Profile</h2>

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
            Age:
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              placeholder="Enter your age"
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

        <div>
          <label>
            Phone:
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Enter your phone"
            />
          </label>
        </div>
      </form>

      <div style={{ flex: 1 }}>
        <h3>Live Preview</h3>
        <p><strong>Name:</strong> {name || "N/A"}</p>
        <p><strong>Age:</strong> {age || "N/A"}</p>
        <p><strong>Email:</strong> {email || "N/A"}</p>
        <p><strong>Phone:</strong> {phone || "N/A"}</p>
      </div>
    </div>
  );
}

export default ProfileUpdateForm;
