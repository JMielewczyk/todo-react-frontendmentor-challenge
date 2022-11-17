import React, {useContext} from "react";

import { ThemeContext } from "../App";

import "../Styles/Background.scss";



const Background = () => {
  const theme = useContext(ThemeContext)

  const toggleImage = () => {
    if(theme === 'dark') {
      return (
        <picture>
          <source
            srcSet="./images/bg-desktop-dark.jpg"
            media="(min-width:600px)"
          />
          <img
            className="background__image"
            src="./images/bg-mobile-dark.jpg"
            alt=""
          />
        </picture>
      )
    }
    else if(theme === 'light') {
      return(
        <picture>
          <source
            srcSet="./images/bg-desktop-light.jpg"
            media="(min-width:600px)"
          />
          <img
            className="background__image"
            src="./images/bg-mobile-light.jpg"
            alt=""
          />
        </picture>
      )
    }
  }
  
  return (
    <div className="background">
      <header>
        {toggleImage()}
      </header>
      <div className={theme === 'dark' ? "background__rest" : "background__rest light"}></div>
    </div>
  );
};

export default Background;
