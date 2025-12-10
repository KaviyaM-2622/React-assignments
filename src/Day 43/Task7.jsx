import { useState } from "react";

function ThemeSwitcher() {
  const [dark, setDark] = useState(false);

  const themeStyle = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
    padding: "40px",
    height: "10vh",
    transition: "0.2s"
  };

  return (
    <div style={themeStyle}>
      <h1>{dark ? "Dark Mode" : "Light Mode"}</h1>

      <button onClick={() => setDark(!dark)}>
        Switch Theme
      </button>
    </div>
  );
}

export default ThemeSwitcher;
