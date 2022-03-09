import { Component, ComponentProps, createSignal, For, Show } from "solid-js";
import style from "../styles/WorkoutPreview.module.scss";
import { WorkoutSimple } from "../types";
import { removeUnit } from "../utils";
import WorkoutPreview from "./WorkoutPreview";

interface CarouselHeights {
  min: string;
  max: string;
}

interface WorkoutPreviewCarouselProps extends ComponentProps<any> {
  workouts: WorkoutSimple[];
}

const WorkoutPreviewCarousel: Component<WorkoutPreviewCarouselProps> = (
  props: WorkoutPreviewCarouselProps
) => {
  const { workouts } = props;

  const [showAll, setShowAll] = createSignal<boolean>(false);
  const carouselHeights = calculateCarouselHeights(workouts.length);

  const toggleShowAll = () => {
    setShowAll(!showAll());
  };

  return (
    <>
      <div
        className={style.WorkoutPreviewCarouselContainer}
        style={{
          height: showAll() ? carouselHeights.max : carouselHeights.min,
        }}
      >
        <For each={workouts}>
          {(workout) => <WorkoutPreview key={workout.id} workout={workout} />}
        </For>
      </div>
      <button
        type="button"
        onclick={toggleShowAll}
        className={style.WorkoutPreviewCarouselShowAllBtn}
      >
        <Show when={showAll()} fallback={"Expand"}>
          Collapse
        </Show>
      </button>
    </>
  );
};

const { workoutPreviewHeight, workoutPreviewMarginTop } = style;
const cardHeight = removeUnit(workoutPreviewHeight);
const cardMarginTop = removeUnit(workoutPreviewMarginTop);

const heightFormula = (numCards: number, numMargins: number) => {
  return cardHeight * numCards + cardMarginTop * numMargins;
};

const calculateCarouselHeights = (numWorkouts: number): CarouselHeights => {
  const minCarouselHeight = heightFormula(
    Math.min(numWorkouts, 3),
    Math.min(numWorkouts - 1, 2)
  );
  const maxCarouselHeight = heightFormula(numWorkouts, numWorkouts - 1);
  return { min: `${minCarouselHeight}px`, max: `${maxCarouselHeight}px` };
};

export default WorkoutPreviewCarousel;
