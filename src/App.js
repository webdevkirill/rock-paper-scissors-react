import React, { useEffect, useState } from 'react';
import './App.css';
import { Rock } from './icons/Rock';
import { Paper } from './icons/Paper';
import { Scissors } from './icons/Scissors';

const choices = [
	{ id: 1, name: 'rock', component: Rock },
	{ id: 2, name: 'paper', component: Paper },
	{ id: 3, name: 'scissors', component: Scissors },
];

export default function App() {
	const [userChose, setUserChose] = useState(null);
	const [computerChose, setComputerChose] = useState(null);
	const [wins, setWins] = useState(0);
	const [losses, setLosses] = useState(0);
	const [gameState, setGameState] = useState(null);

	useEffect(() => {
		const randomChoice =
			choices[Math.floor(Math.random() * choices.length)];
		setComputerChose(randomChoice);
	}, []);

	const userChoiseHandler = (choice) => {
		setUserChose(choice);
		setGameState('win');
	};

	const renderComponent = (choice) => {
		const Component = choice.component;
		return <Component />;
	};

	return (
		<div className='app'>
			<div className='info'>
				<h2>Камень-ножницы-бумага</h2>
				<div className='wins-losses'>
					<div className='wins'>
						<span className='number'>{wins}</span>
						<span className='text'>Побед</span>
					</div>

					<div className='losses'>
						<span className='number'>{losses}</span>
						<span className='text'>Поражений</span>
					</div>
				</div>
			</div>

			{gameState && (
				<div className={`game-state ${gameState}`}>
					<div>
						<div className='game-state-content'>
							<p>{renderComponent(userChose)}</p>
							<p>Вы победили!</p>
							<p>{renderComponent(computerChose)}</p>
						</div>
					</div>
				</div>
			)}

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
							{renderComponent(choice)}
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
