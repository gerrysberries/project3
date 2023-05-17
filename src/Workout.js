const Workout = ({filteredExercises}) => {
	return (
		<section className="workout">
			<div className="">
				<ul className="workoutList">
					{filteredExercises.map((exercise) => (
						<li key={exercise.id} className="exercise">
							{<img className="exerciseImage" src={exercise.images[0].image} alt="" />}

							<p className="exerciseName">{exercise.name}</p>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
};

export default Workout;
