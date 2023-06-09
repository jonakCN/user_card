import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { retrieveUsers } from '../slices/Personalities';
import { Link } from 'react-router-dom';

const UsersList = () => {
	const [currentUser, setCurrentUser] = useState(null);
	const [currentIndex, setCurrentIndex] = useState(-1);
	const users = useSelector((state) => state.users);
	const dispatch = useDispatch();

	const initFetch = useCallback(() => {
		dispatch(retrieveUsers());
	}, [dispatch]);

	useEffect(() => {
		initFetch();
	}, [initFetch]);

	const setActiveUser = (user, index) => {
		setCurrentUser(user);
		setCurrentIndex(index);
	};

	return (
		<div className='col-md-6'>
			<h4>Tutorials List</h4>
			<ul className='list-group'>
				{users &&
					users.map((user, index) => (
						<>
							<li
								className={
									'list-group-item ' + (index === currentIndex ? 'active' : '')
								}
								onClick={() => setActiveUser(user, index)}
								key={index}>
								{user.name}
							</li>
						</>
					))}
			</ul>
			<ul>
				{currentUser ? (
					<Link
						to={'https://jsonplaceholder.typicode.com/users/' + currentUser.id}
						className='badge badge-warning'>
						Edit
					</Link>
				) : (
					<div>
						<br />
						<p>Please click on a User...</p>
					</div>
				)}
			</ul>
		</div>
	);
};

export default UsersList;
