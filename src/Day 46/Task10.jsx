import { useState, useEffect } from "react";

export default function ThemeSwitcher1() {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "light"
  );


  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.body.className = theme; 
  }, [theme]);


  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <h1>{theme.charAt(0).toUpperCase() + theme.slice(1)} Mode</h1>
      <button onClick={toggleTheme}>
        Switch to {theme === "light" ? "Dark" : "Light"} Mode
      </button>
    </div>
  );
}
