import React from 'react';
import Icon from '@mdi/react';
import { mdiLinkedin } from '@mdi/js';
import { getLinkedinProfileLink } from '../../utils/links';

const Linkedin = ({ classes = '' }) => {
	return (
		<a href={getLinkedinProfileLink()} target={'_blank'} rel={'noreferrer'} className={classes}>
			<Icon path={mdiLinkedin} size={1.2} />
		</a>
	);
};

export default Linkedin;
