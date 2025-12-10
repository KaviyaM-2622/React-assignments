import { useState } from "react";

function EvenOdd() {
  const [num, setNum] = useState("");

  const checkType = num % 2 === 0 ? "Even" : "Odd";

  return (
    <div>
      <input 
        type="number" onChange={(e) => setNum(Number(e.target.value))} placeholder="Enter a number"/>

      <h2>{num === "" ? "" : checkType}</h2>
    </div>
  );
}

export default EvenOdd;
