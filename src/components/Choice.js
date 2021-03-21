import React from 'react';
import { renderComponent } from '../utils';

export default function Choice({ choices, userChoiseHandler }) {
	return (
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
	);
}
