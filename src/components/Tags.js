import React from 'react';
import TagsCanvas from 'react-tags-canvas';

const Tags = () => {
	const width = window.innerWidth;

	let size = 500;
	let textHeight = 16;

	if (width >= 1536) {
		size = 600;
		textHeight = 18;
	}

	return (
		<TagsCanvas
			className="text-indigo-500 max-w-full"
			textColour={null}
			freezeActive
			shuffleTags
			shape="sphere"
			zoom={1}
			noSelect
			textFont={null}
			pinchZoom={false}
			wheelZoom={false}
			width={size}
			height={size}
			weight={false}
			textHeight={textHeight}
			depth={0.7}
			maxSpeed={0.05}
			initial={[-0.17, 0.1]}
			fadeIn={500}
			tags={[
				{ value: 'HTML5' },
				{ value: 'CSS3' },
				{ value: 'Bootstrap' },
				{ value: 'jQuery' },
				{ value: 'PHP' },
				{ value: 'MySQL' },
				{ value: 'WordPress' },
				{ value: 'Git' },
				{ value: 'Linux' },
				{ value: 'Paypal' },
				{ value: 'Stripe' },
				{ value: 'REST' },
				{ value: 'JSON' },
				{ value: 'SCSS' },
				{ value: 'Gulp' },
				{ value: 'Webpack' },
				{ value: 'Docker' },
				{ value: 'Javascript' },
				{ value: 'npm' },
				{ value: 'React' },
				{ value: 'NodeJS' },
				{ value: 'ExpressJS' },
				{ value: 'Heroku' },
				{ value: 'Netlify' },
				{ value: 'Lodash' },
				{ value: 'Redux' },
				{ value: 'MongoDB' },
				{ value: 'BrowserSync' },
				{ value: 'Gutenberg' },
				{ value: 'Tailwindcss' },
			]}
		/>
	);
};

export default Tags;
