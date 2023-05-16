import './App.css';
import Header from './Header';
import Form from './Form';
import Workout from './Workout';

import {useState, useEffect} from 'react';

function App() {
	const [exercises, setExercises] = useState([]);
	const [filteredExercises, setFilteredExercises] = useState([]);

	useEffect(() => {
		fetch('https://wger.de/api/v2/exerciseinfo/?limit=1200')
			.then((response) => response.json())
			.then((data) => {
				setExercises(data.results);
			})
			.catch((error) => console.error(error));
	}, []);

	const handleSubmit = (event) => {
		event.preventDefault();

		const filtered = exercises.filter((exercise) => {
			return exercise.language.id === 2 && exercise.images.length;
		});

		setFilteredExercises(filtered);
		console.log(filtered);
	};

	return (
		<>
			<Header />
			<Form handleSubmit={handleSubmit} />
			<Workout exercises={filteredExercises} />
		</>
	);
}

export default App;
