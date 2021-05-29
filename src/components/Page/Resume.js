import React from 'react';

const Resume = () => {
	return (
		<div className="max-w-7xl mx-auto px-6 md:px-4 pt-10 pb-5 lg:py-20 text-gray-700">
			<div className="text-lg leading-loose xl:max-w-4xl xl:mx-auto">
				<div className="flex mb-12">
					<div className="max-w-[280px] w-full">
						<span className="text-3xl font-medium tracking-wide text-indigo-500 border-b-[3px] border-indigo-500">
							Careers
						</span>
					</div>
					<div>
						<div className="relative resume-item pb-6 mb-2 pl-9">
							<h3 className="font-medium text-2xl">MARYLINK</h3>
							<h4 className="text-xl my-2">WordPress Developer</h4>
							<p className="opacity-70 text-base">June 2016 - Present</p>
						</div>
						<div className="relative resume-item pb-6 mb-2 pl-9">
							<h3 className="font-medium text-2xl">Upwork</h3>
							<h4 className="text-xl my-2">Web Application Developer</h4>
							<p className="opacity-70 text-base">November 2015 - Present</p>
							<div className="mb-5"></div>
							<h4 className="text-xl my-2">Web Designer &amp; Developer</h4>
							<p className="opacity-70 text-base">March 2011 - Present</p>
						</div>
						<div className="relative resume-item pb-6 mb-2 pl-9">
							<h3 className="font-medium text-2xl">upnrunn™ technologies</h3>
							<h4 className="text-xl my-2">WordPress Developer</h4>
							<p className="opacity-70 text-base">May 2018 - October 2018 (6 months)</p>
						</div>
						<div className="relative resume-item pb-6 mb-2 pl-9">
							<h3 className="font-medium text-2xl">Elance</h3>
							<h4 className="text-xl my-2">Web Designer &amp; Developer</h4>
							<p className="opacity-70 text-base">November 2015 - January 2016 (3 months)</p>
						</div>
						<div className="relative resume-item pb-6 mb-2 pl-9">
							<h3 className="font-medium text-2xl">DevsGround</h3>
							<h4 className="text-xl my-2">Web Designer &amp; Developer</h4>
							<p className="opacity-70 text-base">July 2014 - November 2015 (1 year 5 months)</p>
						</div>
					</div>
				</div>
				<hr />
				<div className="flex mt-12">
					<div className="max-w-[280px] w-full">
						<span className="text-3xl font-medium tracking-wide text-indigo-500 border-b-[3px] border-indigo-500">
							Education
						</span>
					</div>
					<div>
						<div className="relative resume-item pb-6 mb-2 pl-9">
							<h3 className="font-medium text-2xl">Sonargaon University(SU)</h3>
							<h4 className="text-xl mt-2">Bachelor's degree, Computer Science · (2018 - 2022)</h4>
						</div>
						<div className="relative resume-item pb-6 mb-2 pl-9">
							<h3 className="font-medium text-2xl">
								Military Institute of Science and Technology (MIST)
							</h3>
							<h4 className="text-xl mt-2">Bachelor's degree, Mechanical Engineering · (2012 - 2015)</h4>
						</div>
						<div className="relative resume-item pb-6 mb-2 pl-9">
							<h3 className="font-medium text-2xl">Major General Mahmudul Hasan College</h3>
							<h4 className="text-xl mt-2">
								Higher Secondary School Certificate, Science · (2010 - 2011)
							</h4>
						</div>
						<div className="relative resume-item pb-6 mb-2 pl-9">
							<h3 className="font-medium text-2xl">Bindubashini Govt Boys' High School, Tangail</h3>
							<h4 className="text-xl mt-2">Secondary School Certificate, Science · (2004 - 2009)</h4>
						</div>
					</div>
				</div>
				<div className="flex justify-center text-base mt-14">
					<a
						href="https://www.upwork.com/freelancers/~01e00fa4e832283b21"
						target="_blank"
						rel="noreferrer"
						className="bg-indigo-600 text-white px-4 py-2 inline-flex items-center rounded mr-3 hover:bg-indigo-500"
					>
						Download Resume
					</a>
					<a
						href="https://www.upwork.com/freelancers/~01e00fa4e832283b21"
						target="_blank"
						rel="noreferrer"
						className="text-indigo-600 border-2 border-indigo-600 px-4 py-2 inline-flex items-center rounded hover:border-indigo-500 hover:text-indigo-500"
					>
						My Resume
					</a>
				</div>
			</div>
		</div>
	);
};

export default Resume;
