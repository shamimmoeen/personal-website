import React from 'react';
import { useState } from 'react';
import { Switch } from '@headlessui/react';
import { MoonIcon, SunIcon } from '@heroicons/react/solid';

const DarkModeSwitch = () => {
	const [enabled, setEnabled] = useState(false);

	const outerClasses =
		'relative inline-flex flex-shrink-0 h-[28px] w-[68px] border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75';

	const innerClasses =
		'pointer-events-none inline-block h-[24px] w-[28px] rounded-full bg-white shadow-lg transform ring-0 transition ease-in-out duration-200';

	return (
		<div className="grid grid-flow-col auto-cols-auto gap-3 ml-5 items-center">
			<SunIcon className="w-6 text-yellow-400" />
			<Switch
				checked={enabled}
				onChange={setEnabled}
				className={`${enabled ? 'bg-blue-900' : 'bg-blue-700'} ${outerClasses}`}
			>
				<span className="sr-only">Use setting</span>
				<span aria-hidden="true" className={`${enabled ? 'translate-x-9' : 'translate-x-0'} ${innerClasses}`} />
			</Switch>
			<MoonIcon className="w-6" />
		</div>
	);
};

export default DarkModeSwitch;
