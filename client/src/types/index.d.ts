export interface Exercise {
  name: string;
  repetitions: number[];
  rests: number[];
  sets: number;
}

export interface WorkoutSimple {
  id: string;
  name: string;
  numExercises: number;
}

export interface WorkoutFull extends WorkoutSimple {
  exercises: Exercise[];
  caloriesBurned?: number;
}
