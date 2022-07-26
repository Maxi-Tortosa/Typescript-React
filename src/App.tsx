import './App.css';

import React, { useEffect, useRef, useState } from 'react';
import { Sup, SupsPromise } from './types';

import Form from './components/Forms';
import List from './components/List';
import sups from './mock/db';

interface AppState {
	sups: Array<Sup>;
	newSupsNumber: number;
}

const superheroes = new Promise<SupsPromise>((resolve, reject) => {
	setTimeout(() => {
		resolve(sups);
	}, 1000);
});

function App() {
	const [sups, setSups] = useState<AppState['sups']>([]);
	const [newSupsNumber, setNewSupsNumber] =
		useState<AppState['newSupsNumber']>(0);
	const divRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const mapFromApi = (apiResponse: SupsPromise): Array<Sup> => {
			return apiResponse.map((sup) => {
				const {
					months: supMonths,
					profileUrl: avatar,
					nick,
					description,
				} = sup;
				return { nick, description, avatar, supMonths };
			});
		};

		superheroes.then((result) => {
			const sups = mapFromApi(result);
			setSups(sups);
		});
	}, []);

	const handleNewSup = (newSup: Sup): void => {
		setSups((sups) => [...sups, newSup]);
		setNewSupsNumber((n) => n + 1);
	};

	return (
		<div className='App' ref={divRef}>
			<h2> Práctica typescript </h2>
			<List sups={sups} />
			New Sups: {newSupsNumber}
			<Form onNewSup={handleNewSup} />
		</div>
	);
}

export default App;
