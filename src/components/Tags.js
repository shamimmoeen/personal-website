import React from 'react';
import TagsCanvas from 'react-tags-canvas';

const Tags = () => {
	const size = 500;

	return (
		<TagsCanvas
			className="text-gray-600 max-w-full"
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
			weight={true}
			weightMode={'size'}
			maxSpeed={0.05}
			initial={[-0.17, 0.1]}
			fadeIn={500}
			tags={[
				{ value: 'HTML5', weight: 18 },
				{ value: 'CSS3', weight: 18 },
				{ value: 'Bootstrap', weight: 18 },
				{ value: 'jQuery', weight: 18 },
				{ value: 'PHP', weight: 24 },
				{ value: 'MySQL', weight: 24 },
				{ value: 'WordPress', weight: 25 },
				{ value: 'Git', weight: 24 },
				{ value: 'Paypal', weight: 15 },
				{ value: 'Stripe', weight: 15 },
				{ value: 'REST', weight: 21 },
				{ value: 'SCSS', weight: 21 },
				{ value: 'Gulp', weight: 15 },
				{ value: 'Javascript', weight: 18 },
				{ value: 'React', weight: 24 },
				{ value: 'NodeJS', weight: 18 },
				{ value: 'Redux', weight: 18 },
				{ value: 'MongoDB', weight: 21 },
				{ value: 'BrowserSync', weight: 15 },
				{ value: 'Gutenberg', weight: 18 },
				{ value: 'Tailwindcss', weight: 21 },
			]}
		/>
	);
};

export default Tags;
