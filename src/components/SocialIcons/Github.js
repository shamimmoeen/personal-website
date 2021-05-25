import React from 'react';
import Icon from '@mdi/react';
import { mdiGithub } from '@mdi/js';

const Github = ({ classes = '' }) => {
	return (
		<a href={'https://github.com/shamimmoeen'} target={'_blank'} rel={'noreferrer'} className={classes}>
			<Icon path={mdiGithub} size={1.2} />
		</a>
	);
};

export default Github;
