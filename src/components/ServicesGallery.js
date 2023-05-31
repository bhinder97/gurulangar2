import React from "react";
import Grid2 from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";

import "./css/ServicesGallery.css";

const services = [
  {
    number: "01.",
    subtitle: "HAIRCUT",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.",
  },
  {
    number: "02.",
    subtitle: "GROOMING",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.",
  },
  {
    number: "03.",
    subtitle: "LINEUP",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.",
  },
  {
    number: "04.",
    subtitle: "STYLING",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.",
  },
];

const item = services.map((service) => (
  <Grid2 xs={12} md={6} >
    <h3>
      <span className="number">{service.number}&nbsp;</span>
      <span className="subtitle">{service.subtitle}</span>
    </h3>
    <p className="paragraph-info">{service.description}</p>
  </Grid2>
));

const StyleGallery = () => {
  return (
    <div className="cdiv">
        <Grid2
          container
          display="flex"
          alignItems="center"
          justifyContent="center"
          rowSpacing={4}
        >
          <Grid2
            xs={12}
            md={1}
            lg={1}
            display="flex"
            justifyContent="center"
            alignItems="center"
            className="grid-item-title"
          >
            <h2 className="grid-title">SERVICES</h2>
          </Grid2>
          <Grid2
            xs={12}
            md={11}
            lg={5}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <img
              className="services-img"
              src={
                "https://images.pexels.com/photos/1453005/pexels-photo-1453005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              }
            />
          </Grid2>
          <Grid2
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            className="grid-info"
            xs={12}
            md={12}
            lg={6}
          >
            {item}
          </Grid2>
        </Grid2>
    </div>
  );
};

export default StyleGallery;
