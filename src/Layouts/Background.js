import React from "react";

import "../Styles/Background.scss";

const Background = () => {
  return (
    <div className="background">
      <header>
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
      </header>
      <div className="background__rest"></div>
    </div>
  );
};

export default Background;
