import React, { useContext} from "react";

import { ThemeContext } from "../App";

import "../Styles/Header.scss";



const Header = ({handleTheme}) => {
  const theme = useContext(ThemeContext)
  return (
    <header className="header">
      <h1 className="header__logo">TODO</h1>
      <div onClick={handleTheme} className="header__theme-switch">
        <img className={theme === "dark" ? "moon" : "moon light"} src="./images/icon-moon.svg" alt="" />
        <img className={theme === "dark" ? "sun" : "sun light"} src="./images/icon-sun.svg" alt="" />
      </div>
    </header>
  );
};

export default Header;
