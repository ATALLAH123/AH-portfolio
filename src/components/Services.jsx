import React, { useEffect } from 'react';
import services from '../data/services';
import SectionTitle from './SectionTitle';
import ServiceItem from './ServiceItem';
import AOS from 'aos'
import 'aos/dist/aos.css'

function Services() {
	
	useEffect(()=>{
		AOS.init({duration:2700})
	  },[])
	return (
		<div data-aos="fade-up"  className="py-12">
			<SectionTitle data-aos="fade-up"   >Our Services</SectionTitle>
			<div data-aos="fade-up"   className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
				{services.map(service => (
					<ServiceItem 
						key={service.title}
						title={service.title}
						icon={service.icon}
						description={service.description}
					/>
				))}
			</div>
		</div>
	);
}

export default Services;
