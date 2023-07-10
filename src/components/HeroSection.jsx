import React, { useEffect } from 'react';
import myImg from '../images/moi.jpg';

import { GrInstagram } from 'react-icons/Gr';
import { AiFillGithub } from 'react-icons/Ai';
import { BsLinkedin } from 'react-icons/Bs';

import AOS from 'aos'
import 'aos/dist/aos.css'



function HeroSection() {

	useEffect(()=>{
		AOS.init({duration:2700})
	  },[])
	
	return (
		<div  id="hero" className="flex items-center justify-center flex-col py-20 scroll-smooth ">
			<div data-aos="fade-up" className="text-center flex flex-col items-center justify-between box-border  ">
				<h1 data-aos="fade-left"  className="text-2xl md:text-4xl mb-1 md:mb-3 text-indigo-600 dark:text-indigo-500 font-semibold">
					Hi, This is Houssam
				</h1>
				<p className="text-md md:text-xl max-w-md mb-3 text-gray-600 dark:text-gray-300">
					USTHB civil engineer student , fullstack web devloper MERN-stack and marketing expert 
					{' '}
				</p>
				<img src={myImg}
					alt="Arfan"
					className="w-full md:w-4/12 rounded-lg object-cover mt-2 mb-5  " />
				<a
					href="#works"
					className="inline-block px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:text-md "
				>
					See My Works
				</a>
			</div>
			 

			
			<a data-aos="fade-right" href="https://www.instagram.com/houssem.atallah" className='fixed z-20 left-5 top-4  bg-indigo-500 text-lg p-4 rounded-md'>
			<GrInstagram className='text-white font-bold'/>
			</a>

			<a data-aos="fade-right" href='https://www.linkedin.com/in/attalah-houssem-35b516227/' className='fixed z-20 left-5 top-40 bg-indigo-500 text-lg p-4 rounded-md'>
			<BsLinkedin  className='text-white font-bold'/>
			</a>

			<a data-aos="fade-right" href='https://github.com/ATALLAH123' className='fixed z-20 left-5 top-20  bg-indigo-500 text-lg p-4 rounded-md'>
			<AiFillGithub  className='text-white font-bold'/>
			</a>
			

			</div>
		
	);
}

export default HeroSection;
