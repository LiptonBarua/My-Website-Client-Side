import React from 'react';
// import image from '../Assets/1_1dkUNOPVLoks_RVf-5pEsA.png'

import { Link } from 'react-router-dom';
import Animation from '../Animation/Animation';

const About = () => {
    return (
        <div className=''>
            
            <div className="hero">
                <div className="hero-content flex-col md:flex-row">
                   <Animation></Animation>
                    {/* <img src={image} className="max-w-sm rounded-lg shadow-2xl" alt='' /> */}
                    <div className='md:ml-40'>
                   
                    <h1 className="text-5xl font-bold text-info">About Us</h1>
                        <p className="py-6 text-justify">I am a full stack developer. I can provide clean code and pixel perfect designs. I make the website more interactive with web animations. I can provide clean code and pixel perfect designs. I also make the website more interactive with web animations. A responsive design makes your website accessible to all users, regardless of their devices</p>
                        <Link to='/'><button className="btn bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:from-pink-500 hover:to-yellow-500 text-black">Get Started</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;