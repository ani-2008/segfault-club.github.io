import { A } from "@solidjs/router";
import rehypeStringify from "rehype-stringify";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";
import { createResource, For, Suspense } from "solid-js";

interface Challenge {
  dir: string;
  heading: string;
  description: string;
  date: string;
}

export default function activities() {
  const [challenges] = createResource(async () => {
    const res = await fetch(
      "https://raw.githubusercontent.com/Segfault-Club/Activities/refs/heads/main/challenges.json",
    );
    const challenges: Challenge[] = await res.json();
    return challenges.sort((a, b) =>
      new Date(a.date).getTime() < new Date(b.date).getTime() ? 1 : -1,
    );
  });

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
      <main class="w-full overflow-y-scroll portrait:h-[/*space_for_home_link*/calc(100vh-3rem)]">
        <h1 class="m-8 text-center text-4xl font-bold text-slate-300 underline underline-offset-10">
          Our Activities
        </h1>

        <ul class="space-y-4 p-4">
          <Suspense
            fallback={
              <div class="text-center text-lg text-slate-300">Loading ...</div>
            }
          >
            <For each={challenges()}>
              {(challenge) => (
                <li class="group relative mx-auto max-w-4xl rounded border border-slate-600 bg-slate-800/80 p-6 text-slate-200 shadow-2xl backdrop-blur-sm hover:bg-slate-700/80">
                  <A
                    href={`/activity/${challenge.dir}`}
                  >
                    <div class="absolute top-3 right-3 h-6 w-6">
                      <svg viewBox="0 0 24 24" fill="none">
                        <path
                          d="M10 15H12C15.3137 15 18 12.3137 18 9C18 5.68629 15.3137 3 12 3H8C4.68629 3 2 5.68629 2 9C2 10.5367 2.57771 11.9385 3.52779 13M16 21C19.3137 21 22 18.3137 22 15C22 13.4633 21.4223 12.0615 20.4722 11M12 21C8.68629 21 6 18.3137 6 15C6 11.6863 8.68629 9 12 9H14"
                          stroke="#cacaca"
                          stroke-width="1.5"
                          stroke-linecap="round"
                        />
                      </svg>
                    </div>
                    <h2 class="text-2xl font-semibold">
                      <span class="text-blue-300">#{ }</span>{" "}
                      <span class="decoration-2 underline-offset-4 group-hover:underline">
                        {challenge.heading}
                      </span>
                    </h2>
                    <div
                      class="my-3 markdown-content"
                      innerHTML={unified()
                        .use(remarkParse)
                        .use(remarkRehype)
                        .use(rehypeStringify)
                        .processSync(challenge.description)
                        .toString()}
                    />
                  </A>

                  <div class="flex flex-wrap items-center gap-x-5 gap-y-1 text-sm text-slate-400">
                    🗓️ {challenge.date}
                    <div class="flex items-center gap-1.5">
                      <svg class="h-3 w-3" viewBox="0 0 20 20">
                        <g
                          id="Page-1"
                          stroke="none"
                          stroke-width="1"
                          fill="none"
                          fill-rule="evenodd"
                        >
                          <g
                            class="fill-slate-300"
                            id="Dribbble-Light-Preview"
                            transform="translate(-420.000000, -2119.000000)"
                          >
                            <g
                              id="icons"
                              transform="translate(56.000000, 160.000000)"
                            >
                              <path
                                d="M378.083123,1964.99998 C378.083123,1962.79398 376.251842,1960.99998 374,1960.99998 C371.748158,1960.99998 369.916877,1962.79398 369.916877,1964.99998 C369.916877,1967.20598 371.748158,1968.99998 374,1968.99998 C376.251842,1968.99998 378.083123,1967.20598 378.083123,1964.99998 M381.945758,1978.99998 L380.124685,1978.99998 C379.561214,1978.99998 379.103904,1978.55198 379.103904,1977.99998 C379.103904,1977.44798 379.561214,1976.99998 380.124685,1976.99998 L380.5626,1976.99998 C381.26898,1976.99998 381.790599,1976.30298 381.523154,1975.66198 C380.286989,1972.69798 377.383888,1970.99998 374,1970.99998 C370.616112,1970.99998 367.713011,1972.69798 366.476846,1975.66198 C366.209401,1976.30298 366.73102,1976.99998 367.4374,1976.99998 L367.875315,1976.99998 C368.438786,1976.99998 368.896096,1977.44798 368.896096,1977.99998 C368.896096,1978.55198 368.438786,1978.99998 367.875315,1978.99998 L366.054242,1978.99998 C364.778266,1978.99998 363.773818,1977.85698 364.044325,1976.63598 C364.787453,1973.27698 367.107688,1970.79798 370.163906,1969.67298 C368.769519,1968.57398 367.875315,1966.88998 367.875315,1964.99998 C367.875315,1961.44898 371.023403,1958.61898 374.733941,1959.04198 C377.422678,1959.34798 379.650022,1961.44698 380.05323,1964.06998 C380.400296,1966.33098 379.456073,1968.39598 377.836094,1969.67298 C380.892312,1970.79798 383.212547,1973.27698 383.955675,1976.63598 C384.226182,1977.85698 383.221734,1978.99998 381.945758,1978.99998 M377.185857,1974.46398 C377.584982,1974.85498 377.584982,1975.48798 377.185857,1975.87898 L374,1978.99998 L371.834924,1976.87898 C371.435799,1976.48798 371.435799,1975.85498 371.834924,1975.46398 L371.834924,1975.46398 C372.233028,1975.07398 372.879183,1975.07398 373.278308,1975.46398 L374,1976.17198 L375.742473,1974.46398 C376.141598,1974.07398 376.787752,1974.07398 377.185857,1974.46398"
                                id="profile_round-[#1345]"
                              ></path>
                            </g>
                          </g>
                        </g>
                      </svg>
                      <span class="text-slate-300">0 Submitted</span>
                    </div>
                  </div>
                </li>
              )}
            </For>
          </Suspense>
        </ul>
      </main>
    </>
  );
}
