import React from 'react';
import useDarkMode from '../hooks/useDarkMode';
const Nav = () => {
  const [darkMode, setDarkMode] = useDarkMode();
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
    <nav className="navbar">
      <h1>Womans World Cup Players</h1>
      Toggle Dark-Mode:
      <div className="dark-mode__toggle">
          
        <button
          onClick={toggleMode}
          className={ darkMode ? 'toggle toggled' : 'toggle'}
          data-testid='dm' 
        />
      </div>
    </nav>
  );
};

export default Nav;