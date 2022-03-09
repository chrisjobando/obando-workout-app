export interface WorkoutSimple {
  id: string;
  title: string;
  numExercises: number;
}

export interface WorkoutFull extends WorkoutSimple {
  // add exercises array here
}
