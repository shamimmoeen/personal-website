import React from 'react';
import wave from '../../images/wave.png';
import Tags from '../Tags';

const Home = () => {
	return (
		<div className="max-w-7xl mx-auto px-6 md:px-4 pt-10 pb-5 lg:py-20 text-gray-700">
			<div className="lg:flex justify-start items-center">
				<div className="mb-7 lg:mb-0 lg:mr-8 text-center lg:text-left">
					<h4 className="text-2xl md:text-4xl pb-3 md:pb-5 flex items-center justify-center lg:justify-start">
						Hi
						<img src={wave} alt="!" className="w-6 h-6 md:w-8 md:h-8 ml-2" />
					</h4>
					<h2 className="text-3xl md:text-5xl pb-4 md:pb-7">I'm Mainul Hassan Main</h2>
					<h3 className="text-xl md:text-2xl">a Frontend Developer</h3>
					<div className="flex justify-center lg:justify-start mt-5 md:mt-7">
						<a
							className="bg-indigo-600 text-white px-4 py-2 inline-flex items-center rounded mr-3 hover:bg-indigo-500"
							href="https://www.upwork.com/freelancers/~01e00fa4e832283b21"
							target="_blank"
							rel="noreferrer"
						>
							Hire Me
						</a>
						<a
							className="text-indigo-600 border-2 border-indigo-600 px-4 py-2 inline-flex items-center rounded hover:border-indigo-500 hover:text-indigo-500"
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
