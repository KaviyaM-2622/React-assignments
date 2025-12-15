import { useState } from "react";

function Uppercase() {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value.toUpperCase());
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Type here"
        value={text}
        onChange={handleChange}
      />
      <p>Your input: {text}</p>
    </div>
  );
}

export default Uppercase;
