import React from 'react'
import Signup_hero from './Signup_hero.js';
import Sign_Up_form from './Sign_Up_form.js';
import Education from '../home/Education.js';

function Sign_Up_wrap() {
    return (
        <div className='sign'>
        <Signup_hero></Signup_hero>
        <Sign_Up_form></Sign_Up_form>
        <Education></Education>
        </div>

      );
}

export default Sign_Up_wrap;