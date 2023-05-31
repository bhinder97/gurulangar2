import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import "./css/ProductsCard.css";
import Typography from "@mui/material/Typography";

const ProductsCard = (props) => {
  return (
    <Card className="card">
      <CardMedia
        component="img"
        alt={props.header}
        image={props.source}
        className="card-img"
      />
      <CardContent className="card-content">
        <Typography gutterBottom variant="h5" component="div">
          {props.header}
        </Typography>
        <Typography gutterBottom variant="body2" color="white">
          {props.description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProductsCard;
