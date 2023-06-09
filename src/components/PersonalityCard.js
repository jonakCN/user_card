import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { retrieveUsers } from '../slices/Personalities';
import { retrieveBrands } from '../slices/Brands';
import Card from './Card/Card';
import { LoremIpsum } from 'lorem-ipsum';

const PersonalityCard = () => {
	const dispatch = useDispatch();

	const [effect, setEffect] = useState(false);
	const [description, setDescription] = useState('');
	const lorem = new LoremIpsum({
		sentencesPerParagraph: {
			max: 8,
			min: 4,
		},
		wordsPerSentence: {
			max: 16,
			min: 4,
		},
	});

	const initFetch = useCallback(() => {
		setDescription(lorem.generateSentences(3));

		setEffect(true);

		dispatch(retrieveUsers());
		dispatch(retrieveBrands());
	}, [dispatch]);

	useEffect(() => {
		initFetch();
	}, [initFetch]);

	return (
		<>
			<div className='w-100 rounded overflow-hidden shadow-lg text-center'>
				<div className='px-6 py-4'>
					<div className='font-bold text-xl mb-2'>Personality Card</div>

					<button
						className={`${
							effect && 'animate-wiggle'
						} m-4 p-1 rounded-full from-rose-400 via-fuchsia-500 to-indigo-500 bg-gradient-to-r`}
						onClick={initFetch}
						onAnimationEnd={() => setEffect(false)}>
						<span className='block text-black px-4 py-2 font-semibold rounded-full bg-white hover:bg-transparent hover:text-white transition'>
							Random Student
						</span>
					</button>
				</div>
			</div>

			<div className='App flex flex-row justify-center items-center bg-slate-300 py-20 font-sans'>
				<Card initFetch={initFetch} description={description} />
			</div>
		</>
	);
};

export default React.memo(PersonalityCard);
