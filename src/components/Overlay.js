import React from 'react';
import { renderComponent } from '../utils';

const resultMessages = {
	win: 'Победа!',
	lose: 'Вы проиграли',
	draw: 'Ничья',
};

export default function Overlay({
	gameState,
	userChose,
	computerChose,
	restartGame,
}) {
	if (gameState) {
		return (
			<div className={`game-state ${gameState}`}>
				<div>
					<div className='game-state-content'>
						<p>{renderComponent(userChose)}</p>
						<p>{resultMessages[gameState]}</p>
						<p>{renderComponent(computerChose)}</p>
					</div>
					<button onClick={restartGame}>Играть заного</button>
				</div>
			</div>
		);
	}
	return null;
}
