import React from "react";
import Divider from "@mui/material/Divider";

import "./css/Header.css";
import FadeUp from "../components/animation/FadeUp.js";

const Header = (props) => {
  return (
    <div>
      <div className="header-div">
        <FadeUp>
          <h1 className="header-header">{props.name}</h1>
        </FadeUp>
        <Divider className="divider" />
      </div>
    </div>
  );
};

export default Header;
