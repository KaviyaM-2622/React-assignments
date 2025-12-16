import React, { useState } from "react";

export default function CharacterCount() {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "auto" }}>
      <h2>Character Counter</h2>
      <textarea
        value={text}
        onChange={handleChange}
        placeholder="Type something..."
        rows={5}
        style={{ width: "100%", padding: "10px", fontSize: "16px" }}
      />
      <p>Character Count: {text.length}</p>
    </div>
  );
}
