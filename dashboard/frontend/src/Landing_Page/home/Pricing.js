import React from 'react'
import price from "../Media/Pricing3.png"

function Pricing() {
    return (
        <div className=" ms-n4 mb-5">
            <div className='row princing-container'> 
                <div className='col col-6 pricing_img'>
                    <img src={price} className='img-fluid'></img>
                </div>
                <div className='col col-5 ms-5 mt-5'>
                    <h1 className='d-flex justify-content-center mb-3'>Unbeatable pricing</h1>
                    <p>
                        We pioneered the concept of discount broking and brought true price transparency to the Indian financial market. By eliminating hidden fees and offering flat pricing, we’ve empowered millions of investors to trade confidently and affordably.
                    </p>
                    </div>
            </div>
        </div>
     );
}

export default Pricing;