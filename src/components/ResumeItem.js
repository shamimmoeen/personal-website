import React from 'react';

const ResumeItem = ({ header, subHeader, description }) => {
	return (
		<div className="relative resume-item pb-4 mb-1 pl-9">
			<h3 className="font-medium text-xl">{header}</h3>
			<h4 className="text-lg my-1">{subHeader}</h4>
			{description && <p className="text-gray-500 dark:text-gray-400 text-base">{description}</p>}
		</div>
	);
};

export default ResumeItem;
