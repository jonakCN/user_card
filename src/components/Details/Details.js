import React from 'react';
import './Details.scss';

const Details = ({ users }) => {
	return (
		<div className='Details my-3'>
			<h1 className='heading-txt text-xl font-bold text-orange-300 mb-5'>
				Details
			</h1>
			{users.map((user, index) => {
				return (
					<div className='details_items flex flex-row w-full mt-2' key={index}>
						<div className='details_items_left w-1/3 font-semibold '>
							<h4>UserName:</h4>
							<h4>Date of Birth:</h4>
							<h4>Phone:</h4>
							<h4>Email:</h4>
							<h4>Subscription:</h4>
							<h4>Location:</h4>
						</div>
						<div className='text-sm mt-1 details_items_right text-slate-600 w-2/3 leading-relaxed mt-1'>
							<p>{user.username}</p>
							<p>{user.date_of_birth}</p>
							<p>{user.phone_number}</p>
							<p>{user.email}</p>
							<p>{user.subscription.plan}</p>
							<p>
								{`${user.address.city}, ${user.address.street_name}, ${user.address.street_address}, ${user.address.zip_code}, ${user.address.state}, ${user.address.country}`}
							</p>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default Details;
