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

		setFilteredExercises(randomize(newArray, userFilters.howMany));
	};

	const randomize = (array, numElements) => {
		const shuffledArray = array.sort(() => 0.5 - Math.random());
		const selectedElements = shuffledArray.slice(0, numElements);

		return selectedElements;
	};

	const reset = (event) => {
		event.preventDefault();
		setUserFilters({
			howMany: 0,
			abs: false,
			arms: false,
			back: false,
			chest: false,
			legs: false,
			shoulders: false,
		});
		setFilteredExercises([]);
	};

	return (
		<div className="wrapper">
			<form onSubmit={getWorkout}>
				<div className="selectContainer">
					<label htmlFor="howMany">Number of exercises: </label>
					<select name="howMany" id="howMany" value={userFilters.howMany} onChange={handleChange} required>
						<option value="" defaultValue>
							----- SELECT -----
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
				</div>

				<fieldset>
					<legend>Select muscle groups to include:</legend>
					<input type="checkbox" name="arms" id="arms" checked={userFilters.arms} onChange={handleChange} />
					<label htmlFor="arms">Arms</label>
					<input type="checkbox" name="back" id="back" checked={userFilters.back} onChange={handleChange} />
					<label htmlFor="back">Back</label>
					<input type="checkbox" name="chest" id="chest" checked={userFilters.chest} onChange={handleChange} />
					<label htmlFor="chest">Chest</label>
					<input type="checkbox" name="core" id="core" checked={userFilters.core} onChange={handleChange} />
					<label htmlFor="core">Core</label>
					<input type="checkbox" name="legs" id="legs" checked={userFilters.legs} onChange={handleChange} />
					<label htmlFor="legs">Legs</label>
					<input type="checkbox" name="shoulders" id="shoulders" checked={userFilters.shoulders} onChange={handleChange} />
					<label htmlFor="shoulders">Shoulders</label>
					<button className="btnReset" type="button" onClick={reset}>
						Reset filters
					</button>
				</fieldset>
				<button className="btnGenerate">Get Workout!</button>
			</form>
			<Workout filteredExercises={filteredExercises} />
		</div>
	);
};

export default Form;
