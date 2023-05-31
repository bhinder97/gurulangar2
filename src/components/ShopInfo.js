import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Grid2 from "@mui/material/Unstable_Grid2";
import logo from "../images/logo2.png";
import { Typography } from "@mui/material";
import FadeIn from "./animation/FadeIn.js";
import FadeLeft from "./animation/FadeLeft.js";
import FadeRight from "./animation/FadeRight.js";

import "./css/ShopInfo.css";

const ShopInfo = () => {
  return (
    <div id="section-2" className="section-container">
      <Grid2 container className="grid-container" spacing={4}>
        <Grid2
          xs={12}
          md={8}
          lg={4}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <FadeLeft>
            <div className="grid-left">
              <Typography variant="h3" mb={2}>
                WELCOME TO THE BOARD
              </Typography>
              <Typography variant="h2" fontWeight="bold" mb={5}>
                WE ARE THE BARBER SHOP
              </Typography>
              <Typography variant="body" mb={2}>
                The Barber Shop used to be greater than simply an area to get a
                hairstyle or cut; it was a center of the community where people
                came together to bond, to socialize and to exchange suggestions.
                With the goal of bringing this camaraderie back in style, Barber
                Shop, a barber store and shop with places in New york city.
              </Typography>
              <Typography variant="body" mb={5}>
                Thanks for support Barber Shop!
              </Typography>
              <Button
                component={Link}
                to="/About"
                className="button"
                variant="text"
              >
                Read More
              </Button>
            </div>
          </FadeLeft>
        </Grid2>
        <Grid2 xs={12} md={4} lg={4}>
          <FadeIn>
            <div className="grid-center">
              <img
                className="barber-image"
                src={
                  "https://images.pexels.com/photos/2040189/pexels-photo-2040189.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                }
                alt="Barber"
                loading="lazy"
              />
            </div>
          </FadeIn>
        </Grid2>
        <Grid2 xs={12} md={6} lg={4}>
          <FadeRight>
            <div>
              <img
                src={logo}
                alt="Barber shop logo"
                className="sub-logo"
                loading="lazy"
              />
              <Typography variant="h4" mt={2}>
                +90 123 456 32 11
              </Typography>
              <Typography variant="h5" mt={4} mb={2} fontWeight="bold">
                WORKING HOURS
              </Typography>
              <Typography variant="body">
                <b>MON-THU</b> 09:00 - 19:00
                <br />
                <b>SAT-SUN</b> 09:00 - 19:00
                <br />
              </Typography>
              <Typography variant="body2" mt={4}>
                * Comprehensive Barber Services * Gift Packages * Unique
                Grooming Products * Juniper * Crafted Cocktails *
                Visa/MasterCard/Amex
              </Typography>
            </div>
          </FadeRight>
        </Grid2>
      </Grid2>
    </div>
  );
};

export default ShopInfo;
