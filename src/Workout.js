const Workout = ({filteredExercises}) => {
	return (
		<ul>
			{filteredExercises.map((exercise) => (
				<li key={exercise.id}>
					{<img src={exercise.images[0].image} alt="" />}

					<p className="exerciseName">{exercise.name}</p>
				</li>
			))}
		</ul>
	);
};

export default Workout;
