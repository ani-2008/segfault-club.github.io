import { render } from "solid-js/web";
import "./index.css";

import Background from "./components/Background";
import GithubRibbon from "./components/GithubRibbon";
import Main from "./sections/Main";
import Members from "./sections/Members";

const App = () => (
  <>
    <Background src="/assets/Linux-user-Room.webp" />
    <GithubRibbon repo="Segfault-Club/segfault-club.github.io" />
    <Main className="h-[80vh]" />
    <Members />
  </>
);

const root = document.getElementById("root");
render(() => <App />, root!);
