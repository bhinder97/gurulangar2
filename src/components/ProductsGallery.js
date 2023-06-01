import React from "react";
import Grid2 from "@mui/material/Unstable_Grid2";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ProductsCard from "./ProductsCard.js";
import { Button, ImageListItemBar } from "@mui/material";

import "./css/ProductsGallery.css";

const images = [
  {
    thumbnail: {
      uri: "https://images.pexels.com/photos/3944792/pexels-photo-3944792.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "Pomade",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  },
  {
    thumbnail: {
      uri: "https://images.pexels.com/photos/4108772/pexels-photo-4108772.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "Hair Spray",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  },
  {
    thumbnail: {
      uri: "https://images.pexels.com/photos/4465121/pexels-photo-4465121.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "Shampoo",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  },
  {
    thumbnail: {
      uri: "https://images.pexels.com/photos/3872899/pexels-photo-3872899.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "Conditioner",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  },
  {
    thumbnail: {
      uri: "https://images.pexels.com/photos/12558706/pexels-photo-12558706.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "Beard Balm",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  },
  {
    thumbnail: {
      uri: "https://images.pexels.com/photos/8789590/pexels-photo-8789590.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "Shaving Cream",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  },
  {
    thumbnail: {
      uri: "https://images.pexels.com/photos/8466585/pexels-photo-8466585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "Hair Growth",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  },
];

const slideLeft = () => {
  var slider = document.getElementById("slider");
  slider.scrollLeft = slider.scrollLeft - 1250;
};

const slideRight = () => {
  var slider = document.getElementById("slider");
  slider.scrollLeft = slider.scrollLeft + 1250;
};

const ProductsGallery = () => {
  return (
    <div className="griddiv">
      <Grid2 container columnSpacing={0} rowSpacing={4}>
        <Grid2
          xs={12}
          md={12}
          lg={11}
          display="flex"
          justifyContent="center"
          alignItems="center"
          order={{ xs: 2, lg: 1 }}
        >
          <div>
            <ChevronLeftIcon
              onClick={slideLeft}
              className="chevron"
              sx={{ display: { xs: "none", lg: "flex" } }}
            />
          </div>
          <div id="slider" className="slider-div">
            {images.map((image) => (
              <ProductsCard
                source={image.thumbnail.uri}
                header={image.thumbnail.name}
                description={image.thumbnail.description}
              />
            ))}
          </div>
          <div>
            <ChevronRightIcon
              onClick={slideRight}
              className="chevron"
              sx={{ display: { xs: "none", lg: "flex" } }}
            />
          </div>
        </Grid2>
        <Grid2
          xs={12}
          sm={12}
          md={12}
          lg={1}
          display="flex"
          justifyContent="center"
          alignItems="center"
          order={{ xs: 1, lg: 2 }}
        >
          <div className="products-item-title">
            <h3 className="product-title">PRODUCTS</h3>
          </div>
        </Grid2>
      </Grid2>
    </div>
    /*<div className="products-div">
      <div className="chevron-div">
        <ChevronLeftIcon onClick={slideLeft} className="chevron" />
        <div id="slider" className="slider-div">
          {images.map((image) => (
            <ProductsCard
              source={image.thumbnail.uri}
              header={image.thumbnail.name}
              description={image.thumbnail.description}
            />
          ))}
        </div>
        <ChevronRightIcon onClick={slideRight} className="chevron" />
        <div className="products-title">
          <h3 className="grid-title">PRODUCTS</h3>
        </div>
      </div>
          </div>*/
  );
};

export default ProductsGallery;
