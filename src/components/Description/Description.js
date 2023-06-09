import React from 'react';
import './Description.scss';

const Description = ({ description }) => {
	return (
		<div className='my-8 '>
			<p className='text-sm text-slate-600 leading-loose'>{description}</p>
		</div>
	);
};

export default Description;
