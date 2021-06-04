import React from 'react';
import { ExternalLinkIcon } from '@heroicons/react/outline';

const Project = ({ title, githubUrl, wpPluginDirectoryUrl, children }) => {
	return (
		<div className="bg-[#edf2f7] p-4 mb-8">
			<h3 className="text-xl font-medium mb-2">{title}</h3>
			<p className="text-gray-500">{children}</p>
			<div className="mt-3">
				{githubUrl && (
					<a href={githubUrl} target="_blank" rel="noreferrer" className="text-link items-center mr-3">
						GitHub
						<ExternalLinkIcon className="w-4 h-4 ml-1" />
					</a>
				)}

				{wpPluginDirectoryUrl && (
					<a
						href={wpPluginDirectoryUrl}
						target="_blank"
						rel="noreferrer"
						className="text-link items-center mr-3"
					>
						WordPress Plugin Directory
						<ExternalLinkIcon className="w-4 h-4 ml-1" />
					</a>
				)}
			</div>
		</div>
	);
};

export default Project;
