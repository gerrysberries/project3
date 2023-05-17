import {useState} from 'react';
import Workout from './Workout';

const Form = ({exercises, setExercises}) => {
	const [userFilters, setUserFilters] = useState({
		howMany: 0,
		abs: false,
		arms: false,
		back: false,
		chest: false,
		legs: false,
		shoulders: false,
		// workoutType: '',
	});
	const [filteredExercises, setFilteredExercises] = useState([]);

	function handleChange(event) {
		const {name, value, type, checked} = event.target;
		setUserFilters((prev) => {
			return {
				...prev,
				[name]: type === 'checkbox' ? checked : value,
			};
		});
	}

	const getWorkout = (event) => {
		event.preventDefault();

		let newArray = [];

		if (userFilters.arms) {
			newArray = exercises.filter((exercise) => exercise.category.id === 8);
		}
		if (userFilters.back) {
			newArray = [...newArray, ...exercises.filter((exercise) => exercise.category.id === 12)];
		}
		if (userFilters.chest) {
			newArray = [...newArray, ...exercises.filter((exercise) => exercise.category.id === 11)];
		}
		if (userFilters.core) {
			newArray = [...newArray, ...exercises.filter((exercise) => exercise.category.id === 10)];
		}
		if (userFilters.legs) {
			newArray = [...newArray, ...exercises.filter((exercise) => exercise.category.id === 9)];
		}
		if (userFilters.shoulders) {
			newArray = [...newArray, ...exercises.filter((exercise) => exercise.category.id === 13)];
		}

		setFilteredExercises(newArray);
		console.log(newArray);
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
				<fieldset>
					<legend>Which muscle groups would you like to include?</legend>
					<input type="checkbox" name="arms" id="arms" value={userFilters.arms} onChange={handleChange} />
					<label htmlFor="arms">Arms</label>
					<input type="checkbox" name="back" id="back" value={userFilters.back} onChange={handleChange} />
					<label htmlFor="back">Back</label>
					<input type="checkbox" name="chest" id="chest" value={userFilters.chest} onChange={handleChange} />
					<label htmlFor="chest">Chest</label>
					<input type="checkbox" name="core" id="core" value={userFilters.core} onChange={handleChange} />
					<label htmlFor="core">Core</label>
					<input type="checkbox" name="legs" id="legs" value={userFilters.legs} onChange={handleChange} />
					<label htmlFor="legs">Legs</label>
					<input type="checkbox" name="shoulders" id="shoulders" value={userFilters.shoulders} onChange={handleChange} />
					<label htmlFor="shoulders">Shoulders</label>
				</fieldset>
				<button>Get Workout!</button>
			</form>
			<Workout filteredExercises={filteredExercises} />
		</div>
	);
};

export default Form;
