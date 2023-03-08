import React from 'react';
import { useLoaderData } from 'react-router-dom';
import About from '../About/About';
import Banner from '../Banner/Banner';
import CardProjects from '../CardProject/CardProject';
import EmailContactForm from '../EmailContactForm/EmailContactForm';
import Skill from '../Skill/Skill';
import SmallBanner from '../SmallBanner/SmallBanner';

const Home = () => {
    const cards= useLoaderData();
    return (
        <div className=''>
            <Banner></Banner>
            <About className='lg:max-w-[90%] mx-auto'></About>
            <Skill></Skill>
            <SmallBanner></SmallBanner>
            <div className='lg:max-w-[90%] mx-auto grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-8 my-10'>
              {
                 cards?.map(card=><CardProjects key={card._id} card={card}></CardProjects>)
               }
            </div>
            
       
            <EmailContactForm></EmailContactForm>
            
        </div>
    );
};

export default Home;