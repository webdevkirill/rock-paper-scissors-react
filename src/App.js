import React, { useEffect, useState } from 'react';
import './App.css';
import { Rock } from './icons/Rock';
import { Paper } from './icons/Paper';
import { Scissors } from './icons/Scissors';
import { useGame } from './hooks/useGame';

const choices = [
	{ id: 1, name: 'rock', component: Rock, lossesTo: 2 },
	{ id: 2, name: 'paper', component: Paper, lossesTo: 3 },
	{ id: 3, name: 'scissors', component: Scissors, lossesTo: 1 },
];

const resultMessages = {
	win: 'Победа!',
	lose: 'Вы проиграли',
	draw: 'Ничья',
};

export default function App() {
	const {
		userChose,
		computerChose,
		wins,
		losses,
		gameState,
		userChoiseHandler,
	} = useGame(choices);

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
							<p>{resultMessages[gameState]}</p>
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
