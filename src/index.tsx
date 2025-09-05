import type { Component } from "solid-js";
import { render } from "solid-js/web";
import "./index.css";

import User from "./components/User";

import linuxRoom from "./assets/Linux-user-Room.webp";
const App: Component = () => (
  <>
    <img
      src={linuxRoom}
      alt="Linux user room"
      class="fixed z-0 h-screen w-screen object-cover"
    />
    <div class="fixed inset-0 z-0 bg-gradient-to-b from-slate-950/40 to-slate-950" />

    <section class="relative z-10 flex h-[80vh] snap-start items-center px-[8%] text-white">
      <main class="space-y-7">
        <h1 class="font-logo text-7xl text-violet-50">
          Seg
          <span class="text-red-400 underline decoration-red-400 decoration-wavy decoration-2">
            fault
          </span>{" "}
          Club
        </h1>
        <div class="space-y-4 font-mono text-lg">
          <p>Linux, Debugging, Chaos and legendary segfaults</p>
          <a
            class="rounded bg-slate-700 p-2 transition hover:bg-slate-600"
            href="https://discord.gg/gohar"
            target="_blank"
          >
            Join{" "}
            <span class="underline decoration-blue-400 decoration-2">
              @discord.gg/gohar
            </span>
          </a>
        </div>
      </main>
    </section>

    <section class="relative z-10 flex h-screen w-screen snap-start items-center justify-center">
      <article class="mx-4 h-[85vh] w-[90vw] rounded-xl bg-slate-800/60 p-4 text-white backdrop-blur-sm">
        <h2 class="m-4 text-center text-4xl text-slate-300">Our Members</h2>
        <ul class="mx-auto my-10 grid max-w-3xl grid-cols-2 gap-5 max-md:grid-cols-1">
          <li>
            <User
              username="Thatmagicalcat"
              avatarUrl="https://cdn.discordapp.com/avatars/815189874478546954/fba107a0a4978c1e11063386102ba7ff.png?size=1024"
            />
          </li>
          <li>
            <User
              username="Wicks"
              avatarUrl="https://cdn.discordapp.com/avatars/1159829981803860009/80e4790205157fa6b4152f07c4f27ecf.png?size=1024"
            />
          </li>
          <li>
            <User
              username="DuskyElf"
              avatarUrl="https://cdn.discordapp.com/avatars/820957214264000513/fed1f113e379ef2b2921afb54b154394.png?size=1024"
            />
          </li>
          <li>
            <User
              username="ItsCoral"
              avatarUrl="https://cdn.discordapp.com/avatars/950347120962064464/460f6977493399d10b689174924db21f.png?size=1024"
            />
          </li>
          <li>
            <User
              username="The master of rick rolls"
              avatarUrl="https://cdn.discordapp.com/avatars/950521169432432700/92b68d623d59a2be9650b80999d0e345.png?size=1024"
            />
          </li>
        </ul>
      </article>
    </section>
  </>
);

const root = document.getElementById("root");
render(() => <App />, root!);
