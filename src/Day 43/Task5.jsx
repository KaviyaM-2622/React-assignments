import { useState } from "react";

function ColorChange() {
  const [bgColor, setBgColor] = useState("lightblue");

  return (
    <div style={{ backgroundColor: bgColor, padding: "40px" }}>
      <button onClick={() => setBgColor("lightgreen")}>Change Background</button>
    </div>
  );
}

export default ColorChange;
