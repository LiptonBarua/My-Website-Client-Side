import React, { useRef } from 'react';
import './EmailContactForm.css'
import emailjs from '@emailjs/browser';
import image from '../../../assets/Image/contact.svg'
import { Player } from '@lottiefiles/react-lottie-player';



const EmailContactForm = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_wbch8yl', 'template_gwmk065', form.current, 'Mwbeb29rmiwI4XusA')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    }
    return (
        <div>
            <div className="bg-[#DDE4F8]" id='contact'>
                <div className="form-container flex items-center mt-32">
                    <div className="left-container">
                    <Player className='w-[700px]'
							autoplay
							loop
							src="https://assets7.lottiefiles.com/packages/lf20_fdo8bkv7.json"></Player>
                    </div>
                    <div className="right-container">
                        <div className="right-inner-container">
                            <form ref={form} onSubmit={sendEmail}>
                              <div className=''>
                              <h2 className="lg-view">Contact Me</h2>
                           
                           <div>
                               <p>Name</p>
                               <input type="text" name='user_name' placeholder="Name" required/>                     
                           </div>
                           <div>
                               <p>Email</p>
                               <input type="email" name='user_email' placeholder="Email" required/>
                           </div>

                           <div>
                               <p>Phone</p>
                               <input type="phone" name="user_phone" placeholder="Phone" required/>
                           </div>
                           <div>
                               <p>Message</p>
                               <textarea rows="4" name='message' placeholder="Message" required></textarea>
                           </div>
                            <div className=''>
                            <button className='text-[navy] border border-[navy] hover:bg-[navy] hover:text-white  font-bold uppercase text-xs px-4 py-3 rounded outline-none  mr-1 mb-1'>Submit</button>
                           
                            </div>
            
                              </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EmailContactForm;