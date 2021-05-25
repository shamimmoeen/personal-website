import React from 'react';
import avatar from '../images/avatar.jpg';
import avatar32 from '../images/avatar-32.jpg';

const Avatar = ({ size, onlyImage = false }) => {
	let src;

	switch (size) {
		case 40:
			src = avatar;
			break;

		case 32:
			src = avatar32;
			break;

		default:
			src = avatar;
	}

	const image = <img src={src} alt="Mainul Hassan Main" width={size} className={'rounded-full'} />;

	if (onlyImage) {
		return image;
	}

	return (
		<a href={'/'} className={'inline-flex'}>
			{image}
		</a>
	);
};

export default Avatar;
