import React from 'react';
import Brands from '../Brands/Brands';
import Button from '../Button/Button';
import Description from '../Description/Description';
import Details from '../Details/Details';
import Header from '../Header/Header';

const Card = ({ initFetch, users, brands, description }) => {
	return (
		<div className='card_div flex flex-col px-10 py-12 sm:w-1/2 md:w-2/3 lg:w-1/2 xl:w-1/3 rounded-2xl bg-white '>
			<Header users={users} />
			<Description description={description} />
			<Details users={users} />
			<Brands brands={brands} />
			<Button initFetch={initFetch} />
		</div>
	);
};

export default Card;
