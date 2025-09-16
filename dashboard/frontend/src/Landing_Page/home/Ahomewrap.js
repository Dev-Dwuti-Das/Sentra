import React from 'react'
import Education from './Education';
import Hero from './Hero';
import Product from './Our_Products';
import Pricing from './Pricing';
import Navbar from '../Navbar';
import Footer from '../Footer';
import Open_Account from '../Open_Account';
import Marketnews from "../Ui/home/marketnews";

function Ahomewrap() {
    return ( 
        <>
        <Marketnews></Marketnews>
        <Hero></Hero>
        <Education></Education>
        <Pricing></Pricing>
        <Product/>
        <Open_Account/>    
        </>
     );
}

export default Ahomewrap;