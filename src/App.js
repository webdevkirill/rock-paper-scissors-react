import React from 'react';
import './App.css';
import Rock from './icons/Rock';
import Paper from './icons/Paper';
import Scissors from './icons/Scissors';

const choices = [
	{ id: 1, name: 'rock', component: Rock },
	{ id: 2, name: 'paper', component: Paper },
	{ id: 3, name: 'scissors', component: Scissors },
];

export default function App() {
	const userChoiseHandler = (choice) => {
		console.log(choice);
	};

	return (
		<div className='app'>
			<div className='info'>
				<h2>Камень-ножницы-бумага</h2>
				<div className='wins-losses'>
					<div className='wins'>
						<span className='number'>0</span>
						<span className='text'>Побед</span>
					</div>

					<div className='losses'>
						<span className='number'>0</span>
						<span className='text'>Поражений</span>
					</div>
				</div>
			</div>

			<div className='choices'>
				<div>Вы</div>
				<div />
				<div>Компьютер</div>

				<div>
					{choices.map((choice) => (
						<button
							key={choice.id}
							className={choice.name}
							onClick={() => userChoiseHandler(choice)}
						>
							<choice.component />
						</button>
					))}
				</div>

				<div className='vs'>Против</div>

				<div>
					<button className='computer-choice'>?</button>
				</div>
			</div>
		</div>
	);
}
