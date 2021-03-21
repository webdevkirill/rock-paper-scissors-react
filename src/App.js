import React from 'react';
import './App.css';
import { Rock } from './icons/Rock';
import { Paper } from './icons/Paper';
import { Scissors } from './icons/Scissors';
import { useGame } from './hooks/useGame';
import Overlay from './components/Overlay';
import WinsAndLosses from './components/WinsAndLosses';
import Choice from './components/Choice';

const choices = [
	{ id: 1, name: 'rock', component: Rock, lossesTo: 2 },
	{ id: 2, name: 'paper', component: Paper, lossesTo: 3 },
	{ id: 3, name: 'scissors', component: Scissors, lossesTo: 1 },
];

export default function App() {
	const {
		userChose,
		computerChose,
		wins,
		losses,
		gameState,
		userChoiseHandler,
		restartGame,
	} = useGame(choices);

	return (
		<div className='app'>
			<WinsAndLosses wins={wins} losses={losses} />
			<Overlay
				gameState={gameState}
				userChose={userChose}
				computerChose={computerChose}
				restartGame={restartGame}
			/>
			<Choice choices={choices} userChoiseHandler={userChoiseHandler} />
		</div>
	);
}
