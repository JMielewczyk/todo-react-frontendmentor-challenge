import React, { useState } from "react";

import "../Styles/Header.scss";

const Header = () => {
  const [theme, setTheme] = useState("dark");

  const handleTheme = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };
  return (
    <header className="header">
      <h1 className="header__logo">TODO</h1>
      <div onClick={handleTheme} className="header__theme-switch">
        <img src="./images/icon-moon.svg" alt="" />
        <img src="./images/icon-sun.svg" alt="" />
      </div>
    </header>
  );
};

export default Header;
