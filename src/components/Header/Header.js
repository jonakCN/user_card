import React from 'react';
import './Header.scss';
import { useSelector } from 'react-redux';

const Header = () => {
	const users = useSelector((state) => state.users);

	const getAge = (birthDate) =>
		Math.floor((new Date() - new Date(birthDate).getTime()) / 3.15576e10);

	return (
		<div className='Header w-full'>
			<div className='flex items-center justify-start overflow-hidden'>
				{users &&
					users.map((user, index) => {
						return (
							<React.Fragment key={index}>
								<img
									className='inline-block h-24 w-24 rounded-full ring-2 ring-white'
									loading='lazy'
									src={user.avatar}
									alt='Avatar Image'
								/>
								&emsp;
								<div className='flex flex-col'>
									<h3 className='text-xl font-bold'>
										{`${user.first_name + ' ' + user.last_name}`}
									</h3>
									<h4 className='font-semibold text-slate-400'>
										{getAge(user.date_of_birth)}/{user.gender}
									</h4>
								</div>
							</React.Fragment>
						);
					})}
			</div>
		</div>
	);
};

export default Header;
