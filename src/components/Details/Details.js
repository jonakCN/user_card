import React from 'react';
import './Details.scss';
import { useSelector } from 'react-redux';

const Details = () => {
	const users = useSelector((state) => state.users);

	return (
		<div className='Details my-3'>
			<h1 className='heading-txt text-xl font-bold text-orange-300 mb-5'>
				Details
			</h1>
			{users.map((user, index) => {
				return (
					<div className='details_items flex flex-col w-full mt-2' key={index}>
						<div className='flex flex-row w-full my-1'>
							<div className='details_items_left w-1/3 font-semibold text-slate-700'>
								<h4>Username:</h4>
							</div>
							<div className='details_items_right text-slate-600 w-2/3 leading-relaxed'>
								<h4>{user.username}</h4>
							</div>
						</div>
						<div className='flex flex-row w-full my-1'>
							<div className='details_items_left w-1/3 font-semibold text-slate-700'>
								<h4 className='mb-1'>Date of Birth:</h4>
							</div>
							<div className='details_items_right text-slate-600 w-2/3 leading-relaxed'>
								<h4 className='mb-1'>{user.date_of_birth}</h4>
							</div>
						</div>
						<div className='flex flex-row w-full my-1'>
							<div className='details_items_left w-1/3 font-semibold text-slate-700'>
								<h4 className='mb-1'>Phone:</h4>
							</div>
							<div className='details_items_right text-slate-600 w-2/3 leading-relaxed'>
								<h4 className='mb-1'>{user.phone_number}</h4>
							</div>
						</div>
						<div className='flex flex-row w-full my-1'>
							<div className='details_items_left w-1/3 font-semibold text-slate-700'>
								<h4 className='mb-1'>Email:</h4>
							</div>
							<div className='details_items_right text-slate-600 w-2/3 leading-relaxed'>
								<h4 className='mb-1'>{user.email}</h4>
							</div>
						</div>
						<div className='flex flex-row w-full my-1'>
							<div className='details_items_left w-1/3 font-semibold text-slate-700'>
								<h4 className='mb-1'>Subscription:</h4>
							</div>
							<div className='details_items_right text-slate-600 w-2/3 leading-relaxed'>
								<h4 className='mb-1'>{user.subscription.plan}</h4>
							</div>
						</div>
						<div className='flex flex-row w-full my-1'>
							<div className='details_items_left w-1/3 font-semibold text-slate-700'>
								<h4 className='mb-1'>Location:</h4>
							</div>
							<div className='details_items_right text-slate-600 w-2/3 leading-relaxed'>
								<h4 className='mb-1'>{`${user.address.city}, ${user.address.street_name}, ${user.address.street_address}, ${user.address.zip_code}, ${user.address.state}, ${user.address.country}`}</h4>
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default Details;
