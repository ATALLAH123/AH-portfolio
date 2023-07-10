import React, { useEffect } from 'react';
import works from '../data/works';
import SectionTitle from './SectionTitle';
import WorkItem from './WorkItem';
import AOS from 'aos'
import 'aos/dist/aos.css'

function Works() {
	useEffect(()=>{
		AOS.init({duration:3000})
	  },[])
	return (
		<div className="py-12">
			<SectionTitle  data-aos="fade-up" id="works">Recent Works</SectionTitle>
			<div  data-aos="fade-up" className="grid grid-cols-1 md:grid-cols-2 gap-5">
				{works.map(work => (
					<WorkItem
						key={work.title}
						imgUrl={work.imgUrl}
						title={work.title}
						tech={work.tech}
						workUrl={work.workUrl}
					/>
				))}
			</div>
		</div>
	);
}

export default Works;
