import React from "react";

import Header from '../ui/Header.js';
import ServicesGallery from '../components/ServicesGallery.js';
import ProductsGallery from '../components/ProductsGallery.js';

//This page is the 'our work" page, was named products at the beginning of the template

const Products = () => {
    return (
        <React.Fragment>
            <Header name="our barber shop" />
            <ServicesGallery/>
            <ProductsGallery/>
        </React.Fragment>
    );
}

export default Products;

{/*
Services:

Prices

Haircut Styles - buzzcut
Beard trims
Clean up
Line up
Hot towel
Shaves
Hair shampoo and condition
Kids haircuts

Products:
Pomade
Clay
Hair spray
Shampoo
Conditioner
Beard spray
Shaving cream
Hair Growth

Aftershave


*/}