import React from 'react';
import Icon from '@mdi/react';
import { mdiLinkedin } from '@mdi/js';

const Linkedin = ({ classes = '' }) => {
	return (
		<a
			href={'https://www.linkedin.com/in/mainulhassanmain/'}
			target={'_blank'}
			rel={'noreferrer'}
			className={classes}
		>
			<Icon path={mdiLinkedin} size={1.2} />
		</a>
	);
};

export default Linkedin;
