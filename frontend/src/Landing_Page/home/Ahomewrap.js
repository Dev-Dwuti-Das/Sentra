import React from 'react'
import Education from './Education';
import Hero from './Hero';
import Product from './Our_Products';
import Pricing from './Pricing';
import Navbar from '../Navbar';
import Footer from '../Footer';
import Open_Account from '../Open_Account';

function Ahomewrap() {
    return ( 
        <>
        <Navbar></Navbar>
        <Hero></Hero>
        <Education></Education>
        <Pricing></Pricing>
        <Open_Account/>    
        <Footer></Footer>
        </>
     );
}

export default Ahomewrap;