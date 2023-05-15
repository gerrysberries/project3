import './App.css';
import Header from './Header';
import Form from './Form';
import Workout from './Workout';

import {useState, useEffect} from 'react';

function App() {
	const [exercises, setExercises] = useState([]);
	const [filteredExercises, setFilteredExercises] = useState([]);

	useEffect(() => {}, []);

	return (
		<>
			<Header />
			<Form />
			<Workout />
		</>
	);
}

export default App;
