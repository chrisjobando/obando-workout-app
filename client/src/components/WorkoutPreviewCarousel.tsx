import { Component, ComponentProps, createSignal } from "solid-js";
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

  const toggleShowAll = () => {
    setShowAll(!showAll());
  };

  const carouselHeights = calculateCarouselHeights(workouts.length);

  return (
    <>
      <div
        className={style.WorkoutPreviewCarouselContainer}
        style={{
          height: showAll() ? carouselHeights.max : carouselHeights.min,
        }}
      >
        {workouts.map((workout) => (
          <WorkoutPreview key={workout.id} workout={workout} />
        ))}
      </div>
      {workouts.length > 0 && (
        <button
          type="button"
          onclick={toggleShowAll}
          className={style.WorkoutPreviewCarouselShowAll}
        >
          {showAll() ? "Collapse" : "Expand"}
        </button>
      )}
    </>
  );
};

const calculateCarouselHeights = (numWorkouts: number): CarouselHeights => {
  const { workoutPreviewHeight, workoutPreviewMarginTop } = style;
  const cardHeight = removeUnit(workoutPreviewHeight);
  const cardMarginTop = removeUnit(workoutPreviewMarginTop);
  const heightFormula = (numCards: number, numMargins: number) => {
    return cardHeight * numCards + cardMarginTop * numMargins;
  };
  const minCarouselHeight = heightFormula(
    Math.min(numWorkouts, 3),
    Math.min(numWorkouts - 1, 2)
  );
  const maxCarouselHeight = heightFormula(numWorkouts, numWorkouts - 1);
  return { min: `${minCarouselHeight}px`, max: `${maxCarouselHeight}px` };
};

export default WorkoutPreviewCarousel;
