import React from 'react';
import avatar from '../../images/avatar-512.jpg';

const AboutMe = () => {
	return (
		<div className="max-w-7xl mx-auto px-6 md:px-4 pt-10 pb-5 lg:py-20 text-gray-700">
			<div className="lg:flex justify-start items-center">
				<div className="flex flex-1 justify-center mb-8 lg:mb-0 lg:min-w-[450px]">
					<img src={avatar} alt={'Mainul Hassan Main'} className="rounded lg:avatar-perspective" />
				</div>
				<div className="lg:ml-8 text-center lg:text-left">
					<div className="text-lg leading-loose">
						<h3 className="text-2xl pb-2">Who am I?</h3>
						<p className="pb-7">
							I'm Mainul Hassan Main from{' '}
							<a
								href="https://en.wikipedia.org/wiki/Bangladesh"
								target="_blank"
								rel="noreferrer"
								className="border-b-[3px] hover:text-gray-900 border-indigo-200 hover:border-indigo-300"
							>
								Bangladesh
							</a>
							.
						</p>
						<h3 className="text-2xl pb-2">What am I doing?</h3>
						<p className="pb-7">
							I work full time as a WordPress Developer. In my free time, I study front-end development
							with React.
						</p>
						<h3 className="text-2xl pb-2">How much experience do I have?</h3>
						<p className="pb-7">I started developing websites using WordPress in 2014.</p>
						<h3 className="text-2xl pb-2">What is my goal?</h3>
						<p className="pb-7 lg:pb-0">
							My goal is to build useful apps and contribute to open-source projects while working on a
							full-time job.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutMe;
