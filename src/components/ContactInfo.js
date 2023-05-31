import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid2 from "@mui/material/Unstable_Grid2"; // Grid version 2
import { styled } from '@mui/material/styles';

import "./css/ContactInfo.css";

const CssTextField = styled(TextField)({
  '& label': {
    color: 'white',
  },
  '& label.Mui-focused': {
    color: 'rgb(235, 75, 59)',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'white',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'white',
    },
    '&:hover fieldset': {
      borderColor: 'rgb(235, 75, 59)',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'rgb(235, 75, 59)',
    },
  },
});

const ContactInfo = () => {
  return (
    <div className="contact-main-div">
      <Grid2 container spacing={2}>
        <Grid2 xs={12} md={6}>
          <Grid2 container justifyContent="center">
            <Grid2 xs={12}>
              <h2 className="contact-headers">
                <span className="contact-headline">GET IN TOUCH</span>
                <br />
                <b className="under-orange">HOW CAN WE HELP?</b>
              </h2>
            </Grid2>
            <Grid2 xs={12}>
              <CssTextField fullWidth label="Name" id="custom-css-outlined-input" />
            </Grid2>
            <Grid2
              xs={12}
              sm={6}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <CssTextField fullWidth label="Email" id="custom-css-outlined-input" />
            </Grid2>
            <Grid2
              xs={12}
              sm={6}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <CssTextField fullWidth label="Phone Number" id="custom-css-outlined-input" />
            </Grid2>
            <Grid2
              xs={12}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <CssTextField fullWidth label="Message" id="custom-css-outlined-input" />
            </Grid2>
            <Grid2
              xs={12}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Button variant="contained" className="button">
                SUBMIT
              </Button>
            </Grid2>
          </Grid2>
        </Grid2>
        <Grid2 xs={12} sm={12} md={6} lg={6} display="flex">
          <img
            className="image-map"
            src="https://media.wired.com/photos/59269cd37034dc5f91bec0f1/191:100/w_1280,c_limit/GoogleMapTA.jpg"
            alt="Sample map"
          />
        </Grid2>
      </Grid2>
    </div>
  );
};

export default ContactInfo;
