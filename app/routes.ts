import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
	index("routes/home.tsx"),
			route("gazeval", "routes/gazeval.tsx"),
] satisfies RouteConfig;
