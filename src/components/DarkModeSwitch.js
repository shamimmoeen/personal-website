import React from 'react';
import { useState } from 'react';
import { MoonIcon, SunIcon } from '@heroicons/react/solid';

const DarkModeSwitch = () => {
	const [enabled, setEnabled] = useState(false);

	const toggleEnable = () => {
		const _enabled = !enabled;
		setEnabled(_enabled);
	};

	const width = 'w-7';

	return (
		<button onClick={toggleEnable} className="p-1">
			<span className="sr-only">Toggle Dark Mode</span>
			{!enabled ? (
				<SunIcon className={`${width} text-yellow-400`} />
			) : (
				<MoonIcon className={`${width} text-green-400`} />
			)}
		</button>
	);
};

export default DarkModeSwitch;
