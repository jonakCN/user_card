import React from 'react';
import './Button.scss';

const Button = ({ initFetch }) => {
	return (
		<div className='Button w-full flex justify-center items-center pt-8'>
			<button
				className='btn bg-orange-300 hover:bg-orange-400 text-white w-max px-4 py-2 rounded-lg hover:shadow'
				onClick={initFetch}>
				Random Student
			</button>
		</div>
	);
};

export default Button;
