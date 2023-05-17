const Workout = ({filteredExercises}) => {
	return (
		<section className="workout">
			<div className="">
				<ul>
					{filteredExercises.map((exercise) => (
						<li key={exercise.id}>
							{<img src={exercise.images[0].image} alt="" />}

							<p className="exerciseName">{exercise.name}</p>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
};

export default Workout;
