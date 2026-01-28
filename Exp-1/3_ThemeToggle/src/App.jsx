import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.body.classList.remove("light", "dark");
    document.body.classList.add(theme);
  }, [theme]);
 
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className={`app ${theme}`}>
      <h1>Theme Toggle</h1>
      <p className='by'>by Grushnesh</p>
      <p>Current Theme: {theme.toUpperCase()}</p>
      <button onClick={toggleTheme}>
        Switch to {theme === "light" ? "Dark" : "Light"} Mode
      </button>
    </div>
  );
}

export default App;
