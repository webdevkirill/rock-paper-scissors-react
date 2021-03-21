import React from 'react';
import './App.css';
import Rock from './icons/Rock';
import Paper from './icons/Paper';
import Scissors from './icons/Scissors';

export default function App() {
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
					<button className='rock'>
						<Rock />
					</button>
					<button className='paper'>
						<Paper />
					</button>
					<button className='scissors'>
						<Scissors />
					</button>
				</div>

				<div className='vs'>Против</div>

				<div>
					<button className='computer-choice'>?</button>
				</div>
			</div>
		</div>
	);
}
