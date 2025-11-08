import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route(
    "working_with_frontend/union/common",
    "routes/working_with_frontend/union.common.tsx"
  ),
  route(
    "working_with_frontend/union/unusual",
    "routes/working_with_frontend/union.unusual.tsx"
  ),
] satisfies RouteConfig;
