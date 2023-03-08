import React, { useState } from 'react';
import Typewriter from 'typewriter-effect';
import image from '../../../assets/Image/Lipton.jpg'

import './Banner.css'

const Banner = () => {
    const [state] = useState({
        title: "Hello, i'm",
        titleTwo: "Lipton Barua",
        image: image
    })
    return (
        <div className="backgroundImage pt-24 pb-20" >


            <div className="hero">
                <div className="hero-content flex-col lg:flex-row-reverse justify-between">
                    <div className='relative'>
                    <img src={image} className="w-60 rounded-lg lg:ml-80  mb-0" alt='' />
                    </div>
                    <div>
                        <h1 className=" font-bold text-lg text-[navy]">{state.title}</h1>
                        <h1 className="text-4xl md:text-6xl font-bold text-black">{state.titleTwo}</h1>
                        <div className=' text-black mt-2 font-semibold'>
                            Creative Web Designer & Full-Stack-Developer
                        </div>
                        {/* <a href='Lipton Barua Resume.pdf' download='Lipton Barua Resume.pdf'><button className="btn bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:from-pink-500 hover:to-yellow-500 text-black mt-5">My Resume</button></a> */}
                        <button className="bg-[navy] text-white active:bg-blue-600 font-bold uppercase text-sm px-8 py-3 mt-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" >HIRE ME</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Banner;