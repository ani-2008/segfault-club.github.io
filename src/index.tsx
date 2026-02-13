import { render } from "solid-js/web";
import { HashRouter, Route, RouteSectionProps } from "@solidjs/router";
import "./index.css";

import index from "./routes/index";
const activities = lazy(() => import("./routes/activities"));
const activity = lazy(() => import("./routes/activity"));
import pageNotFound from "./routes/pageNotFound";

import Background from "./components/Background";
import GithubRibbon from "./components/GithubRibbon";
import { lazy } from "solid-js";

const App = (props: RouteSectionProps) => (
  <>
    <Background src="/assets/Linux-user-Room.webp" />
    <GithubRibbon repo="Segfault-Club/segfault-club.github.io" />
    {props.children}
  </>
);

const root = document.getElementById("root");
render(
  () => (
    <HashRouter root={App}>
      <Route path="*" component={pageNotFound} />
      <Route path="/" component={index} />
      <Route path="/activities" component={activities} preload={activities} />
      <Route path="/activity">
        <Route path="/" component={activities} preload={activities} />
        <Route path="/:id" component={activity} preload={activity} />
      </Route>
    </HashRouter>
  ),
  root!,
);
