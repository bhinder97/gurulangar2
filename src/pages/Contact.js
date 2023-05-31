import React from "react";

import Header from '../ui/Header.js'
import ContactInfo from '../components/ContactInfo.js';


const Contact = () => {
    return (
        <React.Fragment>
            <Header name="Contact us" />
            <ContactInfo />
        </React.Fragment>
    );
}

export default Contact;