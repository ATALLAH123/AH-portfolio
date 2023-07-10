import React, { useEffect } from 'react';
import myImg from '../images/moi2.jpg';
import SectionTitle from './SectionTitle';
import AOS from 'aos'
import 'aos/dist/aos.css'

function About() {
	useEffect(()=>{
		AOS.init({duration:2700})
	  },[])
	return (
		<div  className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 py-12 scroll-smooth">
			<div className="w-full md:w-6/12 scroll-smooth">
				<SectionTitle  data-aos="fade-up">About Me</SectionTitle>
				<p  data-aos="fade-up" className="text-md text-gray-600 dark:text-gray-300">
					Hi there! I'm a web developer with a passion for creating beautiful and functional websites. As a student of web development, I'm always looking to learn new skills and techniques to improve my craft.

					When I'm not coding, you can often find me listening to music. I'm a huge music lover and enjoy discovering new artists and genres.
					I find that music is a great way to unwind and clear my mind, which helps me stay focused and productive when I'm working on coding projects.
				</p>
				<a  data-aos="fade-up"
					href="mailto:webcifar.com"
					className=" scroll-smooth block mt-3 text-md md:text-lg text-gray-700 dark:text-gray-300 underline decoration-1 hover:text-indigo-500 dark:hover:text-indigo-500"
				>
					houssematallah67@gmail.com
				</a>
			</div>

			<img  data-aos="fade-left"
				src={myImg}
				alt="Arfan"
				className="w-full md:w-4/12 rounded-lg object-cover"
			/>
		</div>
	);
}

export default About;
