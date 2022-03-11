import { RouteDefinition } from "solid-app-router";
import { lazy } from "solid-js";

export const routes: RouteDefinition[] = [
  {
    path: "/",
    component: lazy(() => import("./pages/Home")),
  },
  {
    path: "/workout/:id",
    component: lazy(() => import("./pages/workout/[id]")),
  },
];
