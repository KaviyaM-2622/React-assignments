import { useEffect } from "react";

function Rendered() {
  useEffect(() => {
    console.log("Rendered!");
  }); 

  return <h3>Check the console</h3>;
}

export default Rendered;
