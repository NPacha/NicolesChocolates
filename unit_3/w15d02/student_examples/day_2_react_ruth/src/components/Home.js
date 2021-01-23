import React, { useState } from 'react';
import useInput from './hooks/useInput';

export default function Home(props) {
	const [cardText, updateCardText] = useState('');
	//German
	const [germanList, updateGermanList] = useState([]);
	const {
		value: germanNewCard,
		bind: bindGermanNewCard,
		reset: resetGermanNewCard
	} = useInput('');
	//Kellie
	const [kellieList, updateKellieList] = useState([]);
	const {
		value: kellieNewCard,
		bind: bindKellieNewCard,
		reset: resetKellieNewCard
	} = useInput('');

	//Allegra
	const [allegraList, updateAllegraList] = useState([]);
	const {
		value: allegraNewCard,
		bind: bindAllegraNewCard,
		reset: resetAllegraNewCard
	} = useInput('');

	//Nicole
	const [nicoleList, updateNicoleList] = useState([]);
	const {
		value: nicoleNewCard,
		bind: bindNicoleNewCard,
		reset: resetNicoleNewCard
	} = useInput('');

	const addGerman = event => {
		event.preventDefault();
		updateGermanList([...germanList, germanNewCard]);
		resetGermanNewCard();
	};
	const addKellie = event => {
		event.preventDefault();
		updateKellieList([...kellieList, kellieNewCard]);
		resetKellieNewCard();
	};
	const addAllegra = event => {
		event.preventDefault();
		updateAllegraList([...allegraList, allegraNewCard]);
		resetAllegraNewCard();
	};
	const addNicole = event => {
		event.preventDefault();
		updateNicoleList([...nicoleList, nicoleNewCard]);
		resetNicoleNewCard();
	};

	const deleteLi = event => {
		event.preventDefault();
	};

	return (
		<div className="Page">
			<div className="column">
				<h2 className="heading german">German</h2>
				<ul id="german-list">
					{germanList.map((card, index) => {
						return <li key={`${index}${card}`}>{card}</li>;
					})}
				</ul>
				<form className={'task-form'} onSubmit={addGerman}>
					<label>
						Add to Germans Todo List:
						<input type="text" {...bindGermanNewCard} />
					</label>
					<button>Add to German List</button>
				</form>
			</div>
			<div className="column">
				<h2 className="heading kellie">Kellie</h2>
				<ul id="kellie-list">
					{kellieList.map((card, index) => {
						return <li key={`${index}${card}`}>{card}</li>;
					})}
				</ul>
				<form className={'task-form'} onSubmit={addKellie}>
					<label>
						Add to Kellies Todo List:
						<input type="text" {...bindKellieNewCard} />
					</label>
					<button>Add to Kellie List</button>
				</form>
			</div>
			<div className="column">
				<h2 className="heading allegra">Allegra</h2>
				<ul id="allegra-list">
					{allegraList.map((card, index) => {
						return (
							<li key={`${index}${card}`} onClick={deleteLi}>
								{card}
							</li>
						);
					})}
				</ul>
				<form className={'task-form'} onSubmit={addAllegra}>
					<label>
						Add to Allegras ToDo List:
						<input type="text" {...bindAllegraNewCard} />
					</label>
					<button>Add to Allegras List</button>
				</form>
			</div>
			<div className="column">
				<h2 className="heading nicole">Nicole</h2>
				<ul id="nicole-list">
					{nicoleList.map((card, index) => {
						return <li key={`${index}${card}`}>{card}</li>;
					})}
				</ul>
				<form className={'task-form'} onSubmit={addNicole}>
					<label>
						Add to Nicoles To Do List:
						<input type="text" {...bindNicoleNewCard} />
					</label>
					<button>Add to Nicoles List</button>
				</form>
			</div>
		</div>
	);
}
