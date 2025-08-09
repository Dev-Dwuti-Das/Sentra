    import React from 'react'
    import HomeHeroImg from '../Media/hero.png';
    import './home.css'


    function Hero() {
        return ( 
            <div className='container mt-5'>
                <div className='row'>
                <div className='col'>
                <img src={HomeHeroImg} alt="load nhi hua " className='mb-1 hero img-fluid mx-auto'/>
                </div>
                <div className='col d-flex flex-column justify-content-center align-item-center'>
                <h1 className='h1'>Invest in everything</h1>
                <p className='p1'>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                <button class="btn btn-primary col-4 offset-4 px-3 rounded-pill " >sign up for free</button>
                </div>
                </div>
            </div>
    );
    }

    export default Hero;