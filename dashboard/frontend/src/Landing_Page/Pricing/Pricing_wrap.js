import React from 'react'
import Pricing_hero from './PricingHero';
import Pricing_details from './Pricing_Details';
import Pricing from '../home/Pricing';

function Princingwrap() {
    return (
        <>
        <Pricing_hero></Pricing_hero>
        <Pricing_details></Pricing_details>
        <Pricing></Pricing>
        </>
    );
}

export default Princingwrap
