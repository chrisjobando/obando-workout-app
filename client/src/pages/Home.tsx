import { Component, Show } from "solid-js";
import WorkoutPreviewCarousel from "../components/WorkoutPreviewCarousel";
import { WorkoutSimple } from "../types";

// TODO: Replace with graphql data
import { pastWorkouts, savedWorkouts, user } from "../sample/HomeData";

const createWorkoutCarousel = (
  workoutList: WorkoutSimple[],
  workoutType: string
) => {
  return (
    <>
      <h2>{workoutType} workouts:</h2>
      <Show
        when={workoutList.length > 0}
        fallback={`No ${workoutType.toLowerCase()} workouts`}
      >
        <WorkoutPreviewCarousel workouts={workoutList} />
      </Show>
    </>
  );
};

const Home: Component = () => {
  return (
    <div className={"PageContainer"}>
      <h1>Welcome back {user}!</h1>
      {createWorkoutCarousel(savedWorkouts, "Saved")}
      {createWorkoutCarousel(pastWorkouts, "Past")}
    </div>
  );
};

export default Home;
