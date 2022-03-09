import { Component, Show } from "solid-js";
import WorkoutPreviewCarousel from "../components/WorkoutPreviewCarousel";
import style from "../styles/Home.module.scss";

// TODO: Replace with graphql data
import { pastWorkouts, savedWorkouts, user } from "../sample/HomeData";

const Home: Component = () => {
  return (
    <div className={style.HomeContainer}>
      <h1>Welcome back {user}!</h1>
      {/* <h2>Create a new workout:</h2> */}
      <h2>Saved workouts:</h2>
      <Show when={savedWorkouts.length > 0} fallback={"No saved workouts."}>
        <WorkoutPreviewCarousel workouts={savedWorkouts} />
      </Show>
      <h2>Past workouts:</h2>
      <Show when={pastWorkouts.length > 0} fallback={"No past workouts."}>
        <WorkoutPreviewCarousel workouts={pastWorkouts} />
      </Show>
    </div>
  );
};

export default Home;
