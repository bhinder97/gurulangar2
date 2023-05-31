import React from "react";
import Grid2 from "@mui/material/Unstable_Grid2";

import logo from "../images/logo2.png";
import "./css/Pricing.css";

const cards = [
  {
    title: "Men",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, totam velit? Iure nemo labore inventore?",
  },
  {
    title: "Kids",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, totam velit? Iure nemo labore inventore?",
  },
  {
    title: "Students",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, totam velit? Iure nemo labore inventore?",
  },
];

const Pricing = () => {
  return (
    <div>
      <div className="pricing-div">
        <h2 className="pricing-headers">
          <span className="our-prices">OUR PRICES</span>
          <br />
          <b className="under-orange">ONLY CASH ACCEPTED</b>
        </h2>
        <Grid2
          container
          display="flex"
          alignItems="center"
          justifyContent="center"
          spacing={2}
          className="pricing-container"
        >
          {cards.map((card) => (
            <Grid2 xs={12} md={6} lg={4}>
              <div className="pricing-card">
                <div className="pricing-box">
                  <div className="pricing-content">
                    <h3>{card.title}</h3>
                    <p>
                      {card.description}
                    </p>
                  </div>
                </div>
              </div>
            </Grid2>
          ))}
        </Grid2>
      </div>
    </div>
  );
};

export default Pricing;
