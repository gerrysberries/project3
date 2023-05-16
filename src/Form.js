import {useState} from 'react';

const Form = ({handleChange, handleSubmit}) => {
	const [userFilters, setUserFilters] = useState({
		howMany: 0,
		type: '',
	});

	function handleChange(event) {
		const {name, value, type, checked} = event.target;
		setUserFilters((prev) => {
			return {
				...prev,
				[name]: type === 'checkbox' ? checked : value,
			};
		});
	}

	return (
		<form onSubmit={handleSubmit}>
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

			<label htmlFor="upper">Upper Body</label>
			<input type="radio" id="upper" name="area" />
			<label htmlFor="lower">Lower Body</label>
			<input type="radio" id="lower" name="area" />
			<label htmlFor="full-body">Full Body</label>
			<input type="radio" id="full-body" name="area" />
			<br />
			<br />
			<button>Get Workout!</button>
		</form>
	);
};

export default Form;
