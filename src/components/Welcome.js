import React from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import ProgressiveImage from "react-progressive-graceful-image";
import image from "../images/roce-test.jpg";
import placeholderSrc from "../images/welcome-tiny.webp";
import FadeDown from "./animation/FadeDown.js";

import "./css/Welcome.css";
import { Hidden } from "@mui/material";

const Welcome = () => {
  return (
    <div className="welcome-div">
      <FadeDown>
        <ProgressiveImage src={image} placeholder={placeholderSrc}>
          {(src, loading) => (
            <img
              className={`image${
                loading ? " loading" : " loaded"
              } welcome-image`}
              src={src}
              alt="sea beach"
            />
          )}
        </ProgressiveImage>
      </FadeDown>
      <div className="title">
        <Typography variant="h2" mr={2} ml={2} mb={4}>
          Guru Nanak Langar Seva Society
          <br />
        </Typography>
        <Typography variant="h1" mr={2} ml={2}>
          TESTING AGAIN
          <br />
          TEST FOR SITE
        </Typography>

        <Button
          component={Link}
          to="/Products"
          variant="contained"
          size="large"
          sx={{ marginTop: "5em" }}
        >
          Barber Service
        </Button>
      </div>
    </div>
  );
};

export default Welcome;
