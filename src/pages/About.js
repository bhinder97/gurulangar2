import React from "react";

import Header from '../ui/Header.js'
import Pricing from '../components/Pricing.js';
import History from '../components/History.js';
import Barbers from '../components/Barbers.js';


const About = () => {
    return (
        <div>
            <Header name="ABOUT US" />
            <Pricing />
            <History />
            <Barbers />
        </div>
    );
}

export default About;