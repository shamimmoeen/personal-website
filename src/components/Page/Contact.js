import React from 'react';
import {
	getFacebookProfileLink,
	getTwitterProfileLink,
	getInstagramProfileLink,
	getContactEmail,
} from '../../utils/links';

const Contact = () => {
	return (
		<div className="max-w-7xl mx-auto px-6 md:px-4 pt-10 pb-5 lg:py-20 text-gray-700">
			<div className="text-center text-lg leading-loose">
				<h4 className="text-3xl font-medium mb-5">
					Get in touch{' '}
					<span role="img" aria-label="wave" className="wave">
						👋
					</span>
				</h4>
				<p className="mb-2">Feel free to email me about anything. Want some advice? Give some feedback?</p>
				<p className="mb-10">
					You can also reach me around the web:{' '}
					<a href={getFacebookProfileLink()} target="_blank" rel="noreferrer" className="text-link">
						Facebook
					</a>
					,{' '}
					<a href={getTwitterProfileLink()} target="_blank" rel="noreferrer" className="text-link">
						Twitter
					</a>
					,{' '}
					<a href={getInstagramProfileLink()} target="_blank" rel="noreferrer" className="text-link">
						Instagram
					</a>
				</p>
				<a
					href={`mailto:${getContactEmail()}`}
					className="inline-flex rounded bg-indigo-600 hover:bg-indigo-500 text-white px-10 py-2"
				>
					Say hello
				</a>
			</div>
		</div>
	);
};

export default Contact;
