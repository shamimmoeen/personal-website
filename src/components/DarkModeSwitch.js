import React from 'react';
import { MoonIcon, SunIcon } from '@heroicons/react/solid';
import useDarkMode from './hooks/useDarkMode';

const DarkModeSwitch = () => {
	const [colorTheme, setTheme] = useDarkMode();

	const toggleEnable = () => {
		setTheme(colorTheme);
	};

	const width = 'w-7';

	return (
		<button onClick={toggleEnable} className="p-1 outline-none focus:outline-none">
			<span className="sr-only">Toggle Dark Mode</span>
			{colorTheme === 'dark' ? (
				<SunIcon className={`${width} text-yellow-400`} />
			) : (
				<MoonIcon className={`${width} text-gray-200`} />
			)}
		</button>
	);
};

export default DarkModeSwitch;
