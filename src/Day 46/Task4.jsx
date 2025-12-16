import React, { useState, useEffect } from "react";

export default function InputChange() {
  const [name, setName] = useState("");


  useEffect(() => {
    console.log("Name:", name);
  }, [name]);

  return (
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
  );
}
