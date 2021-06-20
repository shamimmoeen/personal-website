import React from 'react';
import avatar from '../../images/avatar-512.jpg';

const AboutMe = () => {
	return (
		<div className="max-w-6xl 2xl:max-w-7xl mx-auto px-6 md:px-4 pt-10 pb-5 2xl:py-20 text-gray-700 dark:text-gray-300">
			<div className="lg:flex justify-start items-center xl:px-8">
				<div className="flex flex-1 justify-center mb-8 lg:mb-0 lg:min-w-[450px]">
					<img src={avatar} alt={'Mainul Hassan Main'} className="rounded lg:avatar-perspective" />
				</div>
				<div className="lg:ml-8 lg:py-4 text-center lg:text-left lg:min-h-[450px] lg:flex lg:items-center">
					<div className="text-lg leading-loose">
						<p className="pb-7">
							I'm Mainul Hassan Main from{' '}
							<a
								href="https://en.wikipedia.org/wiki/Bangladesh"
								target="_blank"
								rel="noreferrer"
								className="text-link"
							>
								Bangladesh
							</a>
							.
						</p>
						<p className="pb-7">
							I work full time as a WordPress Developer. In my free time, I study front-end development
							with React.
						</p>
						<p className="pb-7">I started developing websites using WordPress in 2014.</p>
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
