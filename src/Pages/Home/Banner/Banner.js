import React, { useState } from 'react';
import Typewriter from 'typewriter-effect';
import image from '../../../assets/Image/279795686_1652374505100581_1610766681983061717_n-removebg-preview.png'

const Banner = () => {
    const [state] = useState({
        title: "Hi",
        titleTwo: "I'm Lipton Barua",
        image: image
    })
    return (
        <div className="hero ">
            <div className="hero-content flex-col md:flex-row-reverse justify-between">
                <img src={image} className=" hidden md:block max-w-sm rounded-lg" alt='' />
                <div>
                    <h1 className="text-4xl md:text-6xl font-bold">{state.title}</h1>
                    <h1 className="text-4xl md:text-6xl font-bold">{state.titleTwo}</h1>
                    <div className=' text-3xl md:text-4xl lg:text-6xl text-info font-semibold'>
                    <Typewriter
                        options={{
                            strings: ["Full Stack Developer."],
                            autoStart: true,
                            loop: true,
                           
                        }}
                    />
                    </div>
                 <a href='Lipton Barua Resume.pdf' download='Lipton Barua Resume.pdf'><button className="btn bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:from-pink-500 hover:to-yellow-500 text-black mt-5">My Resume</button></a>

                </div>
            </div>
        </div>
    );
};

export default Banner;