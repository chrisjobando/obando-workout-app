import { WorkoutSimple, WorkoutFull } from "../types";
import { v4 as uuidv4 } from "uuid";

const ids = {
  1: uuidv4(),
  2: uuidv4(),
  3: uuidv4(),
  4: uuidv4(),
  5: uuidv4(),
  6: uuidv4(),
};

export const user: string = "Chris";

export const savedWorkouts: WorkoutSimple[] = [
  { id: ids[1], name: "Monday", numExercises: 7 },
  { id: ids[2], name: "Tuesday", numExercises: 6 },
  { id: ids[3], name: "Wednesday", numExercises: 8 },
  { id: ids[4], name: "Thursday", numExercises: 6 },
  { id: ids[5], name: "Friday", numExercises: 7 },
  { id: ids[6], name: "Saturday", numExercises: 5 },
];

export const savedWorkoutsFull: WorkoutFull[] = [
  {
    id: ids[1],
    name: "Monday",
    numExercises: 7,
    exercises: [
      {
        name: "Deadlift",
        repetitions: [10, 10, 10, 10],
        rests: [30, 30, 30],
        sets: 4,
      },
      {
        name: "Push-up",
        repetitions: [10, 10, 10, 10],
        rests: [30, 30, 30],
        sets: 4,
      },
      {
        name: "Pull-up",
        repetitions: [10, 10, 10, 10],
        rests: [30, 30, 30],
        sets: 4,
      },
      {
        name: "Squat",
        repetitions: [10, 10, 10, 10],
        rests: [30, 30, 30],
        sets: 4,
      },
      {
        name: "Curl",
        repetitions: [10, 10, 10, 10],
        rests: [30, 30, 30],
        sets: 4,
      },
      {
        name: "Leg Press",
        repetitions: [10, 10, 10, 10],
        rests: [30, 30, 30],
        sets: 4,
      },
      {
        name: "Crunch",
        repetitions: [10, 10, 10, 10],
        rests: [30, 30, 30],
        sets: 4,
      },
    ],
  },
  {
    id: ids[2],
    name: "Tuesday",
    numExercises: 6,
    exercises: [
      {
        name: "Deadlift",
        repetitions: [10, 10, 10, 10],
        rests: [30, 30, 30],
        sets: 4,
      },
      {
        name: "Push-up",
        repetitions: [10, 10, 10, 10],
        rests: [30, 30, 30],
        sets: 4,
      },
      {
        name: "Pull-up",
        repetitions: [10, 10, 10, 10],
        rests: [30, 30, 30],
        sets: 4,
      },
      {
        name: "Squat",
        repetitions: [10, 10, 10, 10],
        rests: [30, 30, 30],
        sets: 4,
      },
      {
        name: "Curl",
        repetitions: [10, 10, 10, 10],
        rests: [30, 30, 30],
        sets: 4,
      },
      {
        name: "Leg Press",
        repetitions: [10, 10, 10, 10],
        rests: [30, 30, 30],
        sets: 4,
      },
    ],
  },
  {
    id: ids[3],
    name: "Wednesday",
    numExercises: 5,
    exercises: [
      {
        name: "Deadlift",
        repetitions: [10, 10, 10, 10],
        rests: [30, 30, 30],
        sets: 4,
      },
      {
        name: "Push-up",
        repetitions: [10, 10, 10, 10],
        rests: [30, 30, 30],
        sets: 4,
      },
      {
        name: "Pull-up",
        repetitions: [10, 10, 10, 10],
        rests: [30, 30, 30],
        sets: 4,
      },
      {
        name: "Squat",
        repetitions: [10, 10, 10, 10],
        rests: [30, 30, 30],
        sets: 4,
      },
    ],
  },
  {
    id: ids[4],
    name: "Thursday",
    numExercises: 6,
    exercises: [
      {
        name: "Deadlift",
        repetitions: [10, 10, 10, 10],
        rests: [30, 30, 30],
        sets: 4,
      },
      {
        name: "Push-up",
        repetitions: [10, 10, 10, 10],
        rests: [30, 30, 30],
        sets: 4,
      },
      {
        name: "Pull-up",
        repetitions: [10, 10, 10, 10],
        rests: [30, 30, 30],
        sets: 4,
      },
      {
        name: "Squat",
        repetitions: [10, 10, 10, 10],
        rests: [30, 30, 30],
        sets: 4,
      },
      {
        name: "Curl",
        repetitions: [10, 10, 10, 10],
        rests: [30, 30, 30],
        sets: 4,
      },
      {
        name: "Leg Press",
        repetitions: [10, 10, 10, 10],
        rests: [30, 30, 30],
        sets: 4,
      },
    ],
  },
  {
    id: ids[5],
    name: "Friday",
    numExercises: 7,
    exercises: [
      {
        name: "Deadlift",
        repetitions: [10, 10, 10, 10],
        rests: [30, 30, 30],
        sets: 4,
      },
      {
        name: "Push-up",
        repetitions: [10, 10, 10, 10],
        rests: [30, 30, 30],
        sets: 4,
      },
      {
        name: "Pull-up",
        repetitions: [10, 10, 10, 10],
        rests: [30, 30, 30],
        sets: 4,
      },
      {
        name: "Squat",
        repetitions: [10, 10, 10, 10],
        rests: [30, 30, 30],
        sets: 4,
      },
      {
        name: "Curl",
        repetitions: [10, 10, 10, 10],
        rests: [30, 30, 30],
        sets: 4,
      },
      {
        name: "Leg Press",
        repetitions: [10, 10, 10, 10],
        rests: [30, 30, 30],
        sets: 4,
      },
      {
        name: "Crunch",
        repetitions: [10, 10, 10, 10],
        rests: [30, 30, 30],
        sets: 4,
      },
    ],
  },
  {
    id: ids[6],
    name: "Saturday",
    numExercises: 5,
    exercises: [
      {
        name: "Deadlift",
        repetitions: [10, 10, 10, 10],
        rests: [30, 30, 30],
        sets: 4,
      },
      {
        name: "Push-up",
        repetitions: [10, 10, 10, 10],
        rests: [30, 30, 30],
        sets: 4,
      },
      {
        name: "Pull-up",
        repetitions: [10, 10, 10, 10],
        rests: [30, 30, 30],
        sets: 4,
      },
      {
        name: "Squat",
        repetitions: [10, 10, 10, 10],
        rests: [30, 30, 30],
        sets: 4,
      },
      {
        name: "Curl",
        repetitions: [10, 10, 10, 10],
        rests: [30, 30, 30],
        sets: 4,
      },
    ],
  },
];

export const pastWorkouts: WorkoutSimple[] = [];
