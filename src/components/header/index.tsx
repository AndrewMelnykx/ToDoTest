import React from "react";

import HeaderBackgroundImage from "@assets/purple-mountain.jpg";
import "./index.scss";

const Header = () => {
  return (
    <div className="wrapper-header">
      <img src={HeaderBackgroundImage} alt="MountainPicture"></img>
    </div>
  );
};

export default Header;
