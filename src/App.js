import './App.css';
import Header from './Header';
import Form from './Form';

import {useState, useEffect} from 'react';

function App() {
	const [exercises, setExercises] = useState([]);
	const [filteredExercises, setFilteredExercises] = useState([]);

	useEffect(() => {
		fetch('https://wger.de/api/v2/exerciseinfo/?limit=1200')
			.then((response) => response.json())
			.then((data) => {
				setExercises(
					data.results.filter((exercise) => {
						// extract only those which have images and are in english
						return exercise.language.id === 2 && exercise.images.length;
					})
				);
			})
			.catch((error) => console.error(error));
	}, []);

	console.log('app has rendered');

	return (
		<>
			<Header />
			<Form setExercises={setExercises} exercises={exercises} />
			{/* <Workout exercises={exercises} /> */}
		</>
	);
}

export default App;
