import React from 'react';
import TagsCanvas from 'react-tags-canvas';

const Tags = () => {
	const size = 500;

	return (
		<TagsCanvas
			className="text-gray-600"
			textColour={null}
			maxSpeed={0.06}
			freezeActive
			// shuffleTags
			shape="sphere"
			zoom={1}
			noSelect
			textFont={null}
			pinchZoom={false}
			wheelZoom={false}
			width={size}
			height={size}
			weight={'size'}
			tags={[
				{ value: 'Javascript', weight: 20 },
				{ value: 'React', weight: 20 },
				{ value: 'HTML5', weight: 20 },
				{ value: 'CSS3', weight: 20 },
				{ value: 'PHP', weight: 25 },
				{ value: 'Git', weight: 30 },
				{ value: 'Redux', weight: 20 },
				{ value: 'NodeJS', weight: 20 },
				{ value: 'MySQL', weight: 20 },
				{ value: 'MongoDB', weight: 25 },
				{ value: 'Stripe', weight: 15 },
				{ value: 'Paypal', weight: 15 },
				{ value: 'Bootstrap', weight: 20 },
				{ value: 'Tailwindcss', weight: 20 },
				{ value: 'SCSS', weight: 20 },
				{ value: 'Gulp', weight: 20 },
				{ value: 'BrowserSync', weight: 20 },
				{ value: 'jQuery', weight: 20 },
				{ value: 'REST', weight: 20 },
				{ value: 'Gutenberg', weight: 20 },
				{ value: 'WordPress', weight: 20 },
			]}
		/>
	);
};

export default Tags;
