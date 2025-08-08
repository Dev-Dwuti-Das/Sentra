    import React from 'react'
    import HomeHeroImg from '../Media/Homehero.png';
    import './home.css'


    function Hero() {
        return ( 
            <div className='container mt-3'>
                <div className='row'>
                <img src={HomeHeroImg} alt="load nhi hua " className='mb-1 hero img-fluid mx-auto'/>
                <h1 className='h1'>Invest in everything</h1>
                <p className='p1'>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                <button class="btn btn-primary col-4 offset-4 px-3 rounded-pill " >sign up for free</button>
                </div>
            </div>
    );
    }

    export default Hero;