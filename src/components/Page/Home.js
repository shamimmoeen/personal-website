import React from 'react';
import wave from '../../images/wave.png';
import Tags from '../Tags';

const Home = () => {
	return (
		<div className="max-w-7xl mx-auto px-4 md:px-10 md:py-20 text-gray-700">
			<div className="flex justify-start items-center">
				<div className="md:mr-8">
					<h3 className="text-4xl pb-5 flex items-center">
						Hi
						<img src={wave} alt="!" className="w-8 h-8 ml-2" />
					</h3>
					<h2 className="text-5xl pb-7">I'm Mainul Hassan Main</h2>
					<h5 className="text-2xl">a Frontend Developer </h5>
					<div className="flex mt-7">
						<a
							className="bg-indigo-600 text-white px-5 py-3 inline-flex rounded mr-3"
							href="https://www.upwork.com/freelancers/~01e00fa4e832283b21"
							target="_blank"
							rel="noreferrer"
						>
							Hire Me
						</a>
						<a
							className="bg-gray-100 text-gray-700 px-5 py-3 inline-flex rounded mr-3"
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
