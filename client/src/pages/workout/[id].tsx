import { useParams } from "solid-app-router";
import { Component, createSignal, onMount, Show } from "solid-js";
import { savedWorkoutsFull } from "../../sample/HomeData";
// import styles from "../../styles/WorkoutPage.module.scss";
import { WorkoutFull } from "../../types";

const WorkoutPage: Component = () => {
  const params = useParams<{ id: string }>();
  const [workout, setWorkout] = createSignal<WorkoutFull>();

  onMount(() => {
    const tempWorkout = savedWorkoutsFull.find(
      (workout) => workout.id === params.id
    );
    if (tempWorkout) {
      setWorkout(tempWorkout);
    }
  });

  return (
    <div className={"PageContainer"}>
      <Show when={workout()} fallback={"Loading..."}>
        <h1>{workout()!.name}</h1>
      </Show>
    </div>
  );
};

export default WorkoutPage;
