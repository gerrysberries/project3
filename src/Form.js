import {useState} from 'react';
import Workout from './Workout';

const Form = ({exercises, setExercises}) => {
	const [userFilters, setUserFilters] = useState({
		howMany: 0,
		workoutType: '',
	});
	const [filteredExercises, setFilteredExercises] = useState([]);

	function handleChange(event) {
		const {name, value, type, checked} = event.target;
		setUserFilters((prev) => {
			return {
				...prev,
				[name]: value,
			};
		});
	}

	const getWorkout = (event) => {
		event.preventDefault();

		setFilteredExercises(
			exercises.filter((exercise) => {
				if (userFilters.workoutType === 'lower') {
					return exercise.category.id === 12;
				} else if (userFilters.workoutType === 'upper') {
					return exercise.category.id === 8;
				}
			})
		);
		console.log(userFilters);
		console.log(filteredExercises);
	};

	console.log('form has rendered');

	return (
		<div>
			<form onSubmit={getWorkout}>
				<p></p>
				<label htmlFor="howMany">Number of exercises: </label>
				<select name="howMany" id="howMany" value={userFilters.howMany} onChange={handleChange}>
					<option value="" disabled>
						Pick one:
					</option>
					<option value={userFilters.value}>1</option>
					<option value={userFilters.value}>2</option>
					<option value={userFilters.value}>3</option>
					<option value={userFilters.value}>4</option>
					<option value={userFilters.value}>5</option>
					<option value={userFilters.value}>6</option>
					<option value={userFilters.value}>7</option>
					<option value={userFilters.value}>8</option>
					<option value={userFilters.value}>9</option>
					<option value={userFilters.value}>10</option>
				</select>
				<br />
				<input type="radio" id="upper" name="workoutType" value="upper" onChange={handleChange} />
				<label htmlFor="upper">Upper Body</label>
				<input type="radio" id="lower" name="workoutType" value="lower" checked={userFilters.workoutType === 'lower'} onChange={handleChange} />
				<label htmlFor="lower">Lower Body</label>
				<input type="radio" id="full-body" name="workoutType" value="full" checked={userFilters.workoutType === 'full'} onChange={handleChange} />
				<label htmlFor="full-body">Full Body</label>
				<br />
				<br />
				<button>Get Workout!</button>
			</form>
			<Workout filteredExercises={filteredExercises} />
		</div>
	);
};

export default Form;
