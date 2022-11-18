import React, {useContext} from "react";

import { ThemeContext } from "../App";

import "../Styles/Background.scss";

import bgDesktopDark from "../Images/bg-desktop-dark.jpg"
import bgMobileDark from "../Images/bg-mobile-dark.jpg"
import bgDesktopLight from"../Images/bg-desktop-light.jpg"
import bgMobileLight from"../Images/bg-mobile-light.jpg"



const Background = () => {
  const theme = useContext(ThemeContext)

  const toggleImage = () => {
    if(theme === 'dark') {
      return (
        <picture>
          <source
            srcSet={bgDesktopDark}
            media="(min-width:600px)"
          />
          <img
            className="background__image"
            src={bgMobileDark}
            alt=""
          />
        </picture>
      )
    }
    else if(theme === 'light') {
      return(
        <picture>
          <source
            srcSet={bgDesktopLight}
            media="(min-width:600px)"
          />
          <img
            className="background__image"
            src={bgMobileLight}
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
