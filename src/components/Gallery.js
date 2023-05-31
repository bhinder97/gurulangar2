import React from "react";

import "./css/Gallery.css";
// import Grid from "@mui/material/Grid";
import Grid2 from "@mui/material/Unstable_Grid2"; // Grid version 2
import FadeUp from "./animation/FadeUp.js";
import FadeDown from "./animation/FadeDown.js";

function Gallery() {
  const images = [
    "https://images.unsplash.com/photo-1589311450401-f91463638a55?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=894&q=80",
    "https://images.unsplash.com/photo-1627999708572-61ef4a097622?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    "https://images.pexels.com/photos/7431273/pexels-photo-7431273.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/2269872/pexels-photo-2269872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/2531553/pexels-photo-2531553.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/2380794/pexels-photo-2380794.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/13580690/pexels-photo-13580690.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/1054048/pexels-photo-1054048.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/2033287/pexels-photo-2033287.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ];

  const items = images.map((image) => (
    <Grid2 xs={6} sm={4} md={4} lg={4} className="grid-item">
      <FadeUp>
        <img src={image} className="gallery-item" loading="lazy" />
      </FadeUp>
    </Grid2>
  ));

  return (
    <div className="gallery-div">
      <FadeDown>
        <h2>
          <span className="gallery-header">PHOTO GALLERY</span>
          <br />
          <b className="gallery-subheader">MEN AND BOYS FULL SERVICE</b>
        </h2>
      </FadeDown>

      <Grid2
        container
        rowSpacing={1}
        columnSpacing={1}
        className="gallery-container"
      >
        {items}
      </Grid2>
    </div>
  );
}

export default Gallery;
