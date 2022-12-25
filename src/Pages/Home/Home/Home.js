import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Banner from '../Banner/Banner';
import CardProjects from '../CardProject/CardProject';
import EmailContactForm from '../EmailContactForm/EmailContactForm';
import Other from '../Other/Other';
import Skill from '../Skill/Skill';

const Home = () => {
    const cards= useLoaderData();
    return (
        <div>
            <Banner></Banner>
            <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-8 my-10'>
              {
                 cards?.map(card=><CardProjects key={card._id} card={card}></CardProjects>)
               }
            </div>
            <Skill></Skill>
       
            <EmailContactForm></EmailContactForm>
            <Other></Other>
        </div>
    );
};

export default Home;