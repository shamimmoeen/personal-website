import React from 'react';
import { MoonIcon, SunIcon } from '@heroicons/react/solid';
import useDarkMode from './hooks/useDarkMode';

const DarkModeSwitch = () => {
	const [colorTheme, setTheme] = useDarkMode();

	const toggleEnable = () => {
		setTheme(colorTheme);
	};

	return (
		<button onClick={toggleEnable} className="p-1 w-8 text-yellow-400 outline-none focus:outline-none">
			<span className="sr-only">Toggle Dark Mode</span>
			{colorTheme === 'dark' ? <SunIcon /> : <MoonIcon />}
		</button>
	);
};

export default DarkModeSwitch;
