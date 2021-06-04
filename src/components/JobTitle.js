import React, { useState, useEffect } from 'react';
import Typist from 'react-typist';
import 'react-typist/dist/Typist.css';

const JobTitle = () => {
	const [count, setCount] = useState(1);

	useEffect(() => {
		setCount(1);
	}, [count]);

	return (
		<>
			{count ? (
				<Typist
					className="inline-flex text-indigo-500 font-medium"
					startDelay={250}
					onTypingDone={() => setCount(0)}
				>
					Frontend Developer
					<Typist.Backspace count={18} delay={1500} />
					WordPress Expert
					<Typist.Delay ms={1500} />
				</Typist>
			) : (
				''
			)}
		</>
	);
};

export default JobTitle;
