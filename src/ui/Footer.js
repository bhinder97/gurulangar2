import React from "react";
import logo from "../images/logo.webp";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import './css/Footer.css';

const Footer = (props) => {
  return (
    <div style={{width: '100%'}}>
        <div style={{backgroundColor: 'black', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            <img style={{ width: '8%', margin:"3vh"}} src={logo} alt="Logo" loading="lazy"/>
            <div style={{margin: '5px'}}>
                <a style={{padding: '5px'}} href="https://facebook.com"><FacebookIcon style={{color: 'white'}}/></a>
                <a style={{padding: '5px'}} href="https://twitter.com"><TwitterIcon style={{color: 'white'}}/></a>
                <a style={{padding: '5px'}} href="https://instagram.com"><InstagramIcon style={{color: 'white'}}/></a>
                <a style={{padding: '5px'}} href="https://linkedin.com"><LinkedInIcon style={{color: 'white'}}/></a>
                <p className="signature">Developed by Webtivity.io</p>
            </div>
        </div>
    </div>
  );
}

export default Footer;
