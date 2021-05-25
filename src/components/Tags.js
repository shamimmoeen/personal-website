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
			shuffleTags
			shape="sphere"
			zoom={1}
			noSelect
			textFont={null}
			pinchZoom={false}
			wheelZoom={false}
			width={size}
			height={size}
			weight={'size'}
			maxSpeed={0.05}
			initial={[0.17, 0.1]}
			fadeIn={500}
			tags={[
				{ value: 'Javascript', weight: 20 },
				{ value: 'React', weight: 30 },
				{ value: 'HTML5', weight: 20 },
				{ value: 'CSS3', weight: 20 },
				{ value: 'PHP', weight: 30 },
				{ value: 'Git', weight: 30 },
				{ value: 'Redux', weight: 20 },
				{ value: 'NodeJS', weight: 20 },
				{ value: 'MySQL', weight: 30 },
				{ value: 'MongoDB', weight: 25 },
				{ value: 'Stripe', weight: 15 },
				{ value: 'Paypal', weight: 15 },
				{ value: 'Bootstrap', weight: 20 },
				{ value: 'Tailwindcss', weight: 25 },
				{ value: 'SCSS', weight: 25 },
				{ value: 'Gulp', weight: 15 },
				{ value: 'BrowserSync', weight: 15 },
				{ value: 'jQuery', weight: 20 },
				{ value: 'REST', weight: 25 },
				{ value: 'Gutenberg', weight: 20 },
				{ value: 'WordPress', weight: 30 },
			]}
		/>
	);
};

export default Tags;
