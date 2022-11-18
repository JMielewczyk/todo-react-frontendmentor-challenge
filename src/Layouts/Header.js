import React, { useContext} from "react";

import { ThemeContext } from "../App";

import "../Styles/Header.scss";

import iconMoon from "../Images/icon-moon.svg"
import iconSun from "../Images/icon-sun.svg"
const Header = ({handleTheme}) => {
  const theme = useContext(ThemeContext)
  return (
    <header className="header">
      <h1 className="header__logo">TODO</h1>
      <div onClick={handleTheme} className="header__theme-switch">
        <img className={theme === "dark" ? "moon" : "moon light"} src={iconMoon} alt="" />
        <img className={theme === "dark" ? "sun" : "sun light"} src={iconSun} alt="" />
      </div>
    </header>
  );
};

export default Header;
