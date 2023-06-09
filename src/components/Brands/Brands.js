import React from 'react';

import './Brands.scss';

const Brands = ({ brands }) => {
	return (
		<div className='Brands py-3'>
			<h1 className='heading-txt text-xl font-bold text-orange-300 my-2'>
				Brands
			</h1>
			<div className='details_items flex flex-wrap'>
				{brands &&
					brands.map((brand, index) => {
						return (
							<div
								className='inline-flex items-center rounded-md bg-gray-50 mr-3 mt-3 px-3 py-2 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10'
								key={index}>
								{brand.brand}
							</div>
						);
					})}
			</div>
		</div>
	);
};

export default Brands;
