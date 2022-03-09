import type { Component } from "solid-js";
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
      {savedWorkouts.length > 0 ? (
        <WorkoutPreviewCarousel workouts={savedWorkouts} />
      ) : (
        "No saved workouts"
      )}
      <h2>Past workouts:</h2>
      {pastWorkouts.length > 0 ? (
        <WorkoutPreviewCarousel workouts={pastWorkouts} />
      ) : (
        "No past workouts"
      )}
    </div>
  );
};

export default Home;
