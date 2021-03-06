import React from 'react';
import JobTitle from '../JobTitle';
import { getUpworkProfileLink, getGDriveResumeLink } from '../../utils/links';
import Tags from '../Tags';

const Home = () => {
	return (
		<div className="max-w-6xl 2xl:max-w-7xl mx-auto px-6 md:px-4 py-5 text-gray-700 dark:text-gray-300">
			<div className="lg:flex justify-start items-center xl:px-8">
				<div className="mb-7 lg:mb-0 xl:mr-8 text-center lg:text-left">
					<h4 className="text-2xl xl:text-3xl pb-3 xl:pb-5">
						Hi{` `}
						<span role="img" aria-label="wave" className="wave">
							👋
						</span>
					</h4>
					<h2 className="text-3xl lg:text-4xl font-medium pb-4">I'm Mainul Hassan Main</h2>
					<h3 className="text-xl 2xl:text-2xl">
						a <JobTitle />
					</h3>
					<div className="flex justify-center lg:justify-start text-base mt-5 md:mt-7">
						<a className="btn-primary mr-3" href={getUpworkProfileLink()} target="_blank" rel="noreferrer">
							Hire Me
						</a>
						<a className="btn-secondary" href={getGDriveResumeLink()} target="_blank" rel="noreferrer">
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
