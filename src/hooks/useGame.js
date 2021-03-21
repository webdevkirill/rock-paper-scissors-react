import { useCallback, useEffect, useState } from 'react';

export const useGame = (choices) => {
	const [userChose, setUserChose] = useState(null);
	const [computerChose, setComputerChose] = useState(null);
	const [wins, setWins] = useState(0);
	const [losses, setLosses] = useState(0);
	const [gameState, setGameState] = useState(null);

	const restartGame = useCallback(() => {
		setGameState(null);
		setUserChose(null);
		const randomChoice =
			choices[Math.floor(Math.random() * choices.length)];
		setComputerChose(randomChoice);
	}, [choices]);

	useEffect(() => {
		restartGame();
	}, [restartGame]);

	const userChoiseHandler = (choice) => {
		setUserChose(choice);

		if (choice.lossesTo === computerChose.id) {
			setGameState('lose');
			setLosses((losses) => losses + 1);
		} else {
			if (choice.id === computerChose.id) {
				setGameState('draw');
			} else {
				setGameState('win');
				setWins((wins) => wins + 1);
			}
		}
	};

	return {
		userChose,
		computerChose,
		wins,
		losses,
		gameState,
		userChoiseHandler,
		restartGame,
	};
};
