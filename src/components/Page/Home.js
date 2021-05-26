import React from 'react';
import wave from '../../images/wave.png';
import Tags from '../Tags';

const Home = () => {
	return (
		<div className="max-w-7xl mx-auto px-4 md:px-10 pt-10 pb-5 md:py-20 text-gray-700">
			<div className="md:flex justify-start items-center">
				<div className="mb-5 md:mb-0 md:mr-8 text-center md:text-left">
					<h3 className="text-2xl lg:text-4xl pb-3 lg:pb-5 flex items-center justify-center md:justify-start">
						Hi
						<img src={wave} alt="!" className="w-6 h-6 lg:w-8 lg:h-8 ml-2" />
					</h3>
					<h2 className="text-3xl lg:text-5xl pb-4 lg:pb-7">I'm Mainul Hassan Main</h2>
					<h5 className="text-xl lg:text-2xl">a Frontend Developer </h5>
					<div className="flex justify-center md:justify-start mt-5 lg:mt-7">
						<a
							className="bg-indigo-600 text-white px-4 py-2 lg:px-5 lg:py-3 inline-flex items-center rounded mr-3"
							href="https://www.upwork.com/freelancers/~01e00fa4e832283b21"
							target="_blank"
							rel="noreferrer"
						>
							Hire Me
						</a>
						<a
							className="text-indigo-600 border-2 border-indigo-600 px-4 py-2 lg:px-5 lg:py-3 inline-flex items-center rounded"
							href="https://www.upwork.com/freelancers/~01e00fa4e832283b21"
							target="_blank"
							rel="noreferrer"
						>
							My Resume
						</a>
					</div>
				</div>

				<div className="flex flex-1 justify-center">
					<Tags />
				</div>
			</div>
		</div>
	);
};

export default Home;
