import React from 'react'
import education from "../Media/education.png"

function Education() {
    return (
        <div className="Edu-container">
            <div className='row'>
                <div className='col col-5 ms-5 mt-2'>
                   <h1 className='mb-4 mt-3 '>Trust with confidence</h1>
                   <h4 >Customer-first always</h4>
                   <p>That's why 1.6+ crore customers trust Sentra with ~ ₹6 lakh crores of equity investments, making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India</p>
                   <h4>No spam or gimmicks</h4>
                   <p>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. Our philosophies.</p>
                   <h4>The Sentra universe</h4>
                   <p>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                   <h4>Do better with money</h4>
                   <p>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
                </div>
                <div className='col col-6 ms-5' >
                    <img src={education} className='img-fluid'></img>
                </div>
            </div>
        </div>
    
    );
}

export default Education;