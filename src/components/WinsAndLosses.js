import React from 'react';

export default function WinsAndLosses({ wins, losses }) {
	return (
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
	);
}
