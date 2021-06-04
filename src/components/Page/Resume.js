import React from 'react';
import { getGDriveResumeDownloadLink, getGDriveResumeLink } from '../../utils/links';
import ResumeItem from '../ResumeItem';

const Resume = () => {
	const wrapperLeftClasses = 'md:max-w-[220px] lg:max-w-[280px] mb-10 md:mb-0 w-full';
	const headingClasses = 'text-2xl font-medium tracking-wide text-indigo-500 border-b-[3px] border-indigo-500';

	return (
		<div className="max-w-7xl mx-auto px-6 md:px-4 pt-10 pb-16 lg:py-20 text-gray-700">
			<div className="text-lg leading-loose xl:max-w-4xl xl:mx-auto">
				<div className="md:flex mb-12">
					<div className={wrapperLeftClasses}>
						<span className={headingClasses}>Careers</span>
					</div>
					<div>
						<ResumeItem
							header={'MARYLINK'}
							subHeader={'WordPress Developer'}
							description={'June 2016 - Present'}
						/>
						<ResumeItem
							header={'Upwork'}
							subHeader={'WordPress Theme & Plugin Developer'}
							description={'November 2015 - Present'}
						/>
						<ResumeItem
							header={'upnrunn™ technologies'}
							subHeader={'WordPress Developer'}
							description={'May 2018 - October 2018 (6 months)'}
						/>
						<ResumeItem
							header={'Elance'}
							subHeader={'Web Designer & Developer'}
							description={'November 2015 - January 2016 (3 months)'}
						/>
						<ResumeItem
							header={'DevsGround'}
							subHeader={'Web Designer & Developer'}
							description={'July 2014 - November 2015 (1 year 5 months)'}
						/>
					</div>
				</div>
				<hr />
				<div className="md:flex mt-12">
					<div className={wrapperLeftClasses}>
						<span className={headingClasses}>Education</span>
					</div>
					<div>
						<ResumeItem
							header={'Sonargaon University(SU)'}
							subHeader={"Bachelor's degree, Computer Science · (2018 - 2022)"}
						/>
						<ResumeItem
							header={'Military Institute of Science and Technology (MIST)'}
							subHeader={"Bachelor's degree, Mechanical Engineering · (2012 - 2015)"}
						/>
						<ResumeItem
							header={'Major General Mahmudul Hasan College'}
							subHeader={'Higher Secondary School Certificate, Science · (2010 - 2011)'}
						/>
						<ResumeItem
							header={"Bindubashini Govt Boys' High School, Tangail"}
							subHeader={'Secondary School Certificate, Science · (2004 - 2009)'}
						/>
					</div>
				</div>
				<div className="flex justify-center text-base mt-14">
					<a
						href={getGDriveResumeDownloadLink()}
						target="_blank"
						rel="noreferrer"
						className="btn-primary mr-3"
					>
						Download Resume
					</a>
					<a href={getGDriveResumeLink()} target="_blank" rel="noreferrer" className="btn-secondary">
						My Resume
					</a>
				</div>
			</div>
		</div>
	);
};

export default Resume;
