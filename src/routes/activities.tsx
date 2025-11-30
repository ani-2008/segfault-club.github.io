import { A } from "@solidjs/router";

export default function activities() {
  return (
    <>
      <A
        href="/"
        class="group absolute left-4 flex items-center text-slate-400 underline decoration-2 hover:text-blue-300 portrait:bottom-2 landscape:top-2"
      >
        <svg
          class="h-10 w-10 fill-slate-300 group-hover:fill-blue-200"
          viewBox="0 0 2050 2050"
        >
          <path d="M1582.2,1488.7a44.9,44.9,0,0,1-36.4-18.5l-75.7-103.9A431.7,431.7,0,0,0,1121.4,1189h-60.1v64c0,59.8-33.5,112.9-87.5,138.6a152.1,152.1,0,0,1-162.7-19.4l-331.5-269a153.5,153.5,0,0,1,0-238.4l331.5-269a152.1,152.1,0,0,1,162.7-19.4c54,25.7,87.5,78.8,87.5,138.6v98.3l161,19.6a460.9,460.9,0,0,1,404.9,457.4v153.4a45,45,0,0,1-45,45Z" />
        </svg>
        Back to Home
      </A>
      <main class="h-screen w-full overflow-y-scroll">
        <h1 class="m-8 text-center text-4xl font-bold text-slate-300 underline underline-offset-10">
          Our Activities
        </h1>

        <div class="text-center text-slate-300">Nothing to see here yet ;)</div>
      </main>
    </>
  );
}
