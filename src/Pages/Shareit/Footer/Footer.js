import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'


const Footer = () => {
  return (
    <div className='mt-10'>
<div class="container">
	<div class="avatar">
		<a href="">
			<img src="https://i.ibb.co/RY403Ly/24862201-543084539362922-1193642513346050516-n.jpg" alt="Skytsunami" />
		</a>
	</div>
	<div class="content">
		<h1>Floating CSS animation</h1>
		<p>Follow me on:</p>
		<p>
			<span><a href="https://www.linkedin.com/in/lipton-barua-2818b1259/" target="_blank"><i class="fa fa-linkedin"></i></a></span>
			<span><a href="https://github.com/LiptonBarua" target="_blank"><i class="fa fa-github"></i></a></span>
			<span><a href="https://www.facebook.com/lipton.barua.33/" target="_blank"><i class="fa fa-facebook"></i></a></span>
			<span><a href="https://www.instagram.com/lipton.barua.33/" target="_blank"><i class="fa fa-instagram"></i></a></span>
		</p>
		
	</div>
</div>


    </div>
  );
};

export default Footer;