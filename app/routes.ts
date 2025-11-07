import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route(
    "working_with_frontend/union",
    "routes/working_with_frontend/union.tsx"
  ),
] satisfies RouteConfig;
