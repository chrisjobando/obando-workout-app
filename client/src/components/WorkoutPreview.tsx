import { Link } from "solid-app-router";
import { Component, ComponentProps, Show } from "solid-js";
import styles from "../styles/WorkoutPreview.module.scss";
import { WorkoutSimple } from "../types";

interface WorkoutPreviewProps extends ComponentProps<any> {
  workout: WorkoutSimple;
}

const WorkoutPreview: Component<WorkoutPreviewProps> = (
  props: WorkoutPreviewProps
) => {
  const { workout } = props;

  return (
    <div className={styles.WorkoutPreviewContainer}>
      <Link
        href={`/workout/${workout.id}`}
        className={styles.WorkoutPreviewLink}
      >
        <span className={styles.WorkoutPreviewTitle}>{workout.name}</span>
      </Link>
      <span className={styles.WorkoutPreviewText}>
        <Show
          when={workout.numExercises !== 1}
          fallback={`${workout.numExercises} EXERCISE`}
        >
          {workout.numExercises} EXERCISES
        </Show>
      </span>
    </div>
  );
};

export default WorkoutPreview;
