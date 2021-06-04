import React from 'react';
import { ExternalLinkIcon } from '@heroicons/react/outline';

const Project = ({ title, githubUrl, wpPluginDirectoryUrl, children }) => {
	return (
		<div className="mb-10">
			<h2 className="text-2xl font-medium mb-2"># {title}</h2>
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
						WordPress.org
						<ExternalLinkIcon className="w-4 h-4 ml-1" />
					</a>
				)}
			</div>
		</div>
	);
};

export default Project;
