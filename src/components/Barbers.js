import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import "./css/Barbers.css";

const cards = [
  {
    source:
      "https://images.pexels.com/photos/2775269/pexels-photo-2775269.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "FRED MORRISON",
  },
  {
    source:
      "https://images.pexels.com/photos/2881253/pexels-photo-2881253.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "ADRIAN SCOLD",
  },
  {
    source:
      "https://images.pexels.com/photos/2035311/pexels-photo-2035311.jpeg",
    name: "ELMER BRIGGS",
  },
];

const Barbers = () => {
  return (
    <div>
      <div className="barbers-main">
        <h2 className="barbers-headers">
          <span className="barbers-headline">OUR BARBERS</span>
          <br />
          <b className="under-orange">WE CAN MAKE YOUR AWESOMENESS</b>
        </h2>
        <div className="grid-div">
          <Grid
            container
            spacing={4}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Grid
              item
              sm={12}
              md={6}
              lg={4}
            >
              <Card>
                <CardMedia
                  component="img"
                  alt="First barber"
                  image={
                    "https://images.pexels.com/photos/2775269/pexels-photo-2775269.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  }
                  title="First barber"
                  className="barbers-card-media"
                />
                <CardContent className="barbers-card-content">
                  <Typography
                    gutterBottom
                    variant="h4"
                    component="h2"
                    align="center"
                    color="white"
                  >
                    FRED MORRISON
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid
              item
              sm={12}
              md={6}
              lg={4}
            >
              <Card>
                <CardMedia
                  component="img"
                  alt="First barber"
                  image={
                    "https://images.pexels.com/photos/2881253/pexels-photo-2881253.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  }
                  title="Second barber"
                  className="barbers-card-media"
                />
                <CardContent className="barbers-card-content">
                  <Typography
                    gutterBottom
                    variant="h4"
                    component="h2"
                    align="center"
                    color="white"
                  >
                    ADRIAN SCOLD
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid
              item
              sm={12}
              md={6}
              lg={4}
            >
              <Card>
                <CardMedia
                  component="img"
                  alt="First barber"
                  image={
                    "https://images.pexels.com/photos/2035311/pexels-photo-2035311.jpeg"
                  }
                  title="Third barber"
                  className="barbers-card-media"
                />
                <CardContent className="barbers-card-content">
                  <Typography
                    gutterBottom
                    variant="h4"
                    component="h2"
                    align="center"
                    color="white"
                  >
                    ELMER BRIGGS
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default Barbers;