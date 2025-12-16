import { useEffect } from "react";

function ComponentLoaded() {
  useEffect(() => {
    console.log("Component Loaded");
  }, []);

  return <h3>Component Loaded</h3>;
}

export default ComponentLoaded;
