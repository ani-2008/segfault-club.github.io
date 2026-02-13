import { A, useParams } from "@solidjs/router";
import { createResource, Show, Suspense } from "solid-js";
import rehypeStringify from "rehype-stringify";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";

const fetchChallenge = async (id: string) => {
  try {
    const res = await fetch(
      `https://raw.githubusercontent.com/Segfault-Club/Activities/refs/heads/main/${id}/instructions.md`,
    );
    if (!res.ok) throw new Error("Failed to fetch instructions");
    return await res.text();
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default function activity() {
  const params = useParams();
  const [content] = createResource(() => params.id, fetchChallenge);

  return (
    <>
      <A
        href="/activities"
        class="group absolute left-4 flex items-center text-slate-400 underline decoration-2 hover:text-blue-300 portrait:bottom-2 landscape:top-2"
      >
        <svg
          class="h-10 w-10 fill-slate-300 group-hover:fill-blue-200"
          viewBox="0 0 2050 2050"
        >
          <path d="M1582.2,1488.7a44.9,44.9,0,0,1-36.4-18.5l-75.7-103.9A431.7,431.7,0,0,0,1121.4,1189h-60.1v64c0,59.8-33.5,112.9-87.5,138.6a152.1,152.1,0,0,1-162.7-19.4l-331.5-269a153.5,153.5,0,0,1,0-238.4l331.5-269a152.1,152.1,0,0,1,162.7-19.4c54,25.7,87.5,78.8,87.5,138.6v98.3l161,19.6a460.9,460.9,0,0,1,404.9,457.4v153.4a45,45,0,0,1-45,45Z" />
        </svg>
        Back to Activities
      </A>

      <main class="w-full overflow-y-scroll portrait:h-[/*space_for_home_link*/calc(100vh-3rem)]">
        <Suspense
          fallback={
            <div class="mt-20 text-center text-lg text-slate-300">
              Loading activity...
            </div>
          }
        >
          <Show
            when={content()}
            fallback={
              <div class="mt-20 text-center text-xl text-red-400">
                Activity not found
              </div>
            }
          >
            <article class="relative fade-down mx-auto max-w-4xl mt-20 mb-10 w-11/12 rounded border border-slate-600 bg-slate-800/80 p-6 text-slate-200 shadow-2xl backdrop-blur-sm">
              <a
                href={`https://github.com/Segfault-Club/Activities/blob/main/${params.id}/instructions.md`}
                target="_blank"
                rel="noreferrer"
                class="absolute top-3 right-3 h-6 w-6 transition-colors hover:text-blue-300"
                title="View on GitHub"
              >
                <svg viewBox="0 0 24 24" fill="none">
                  <path
                    d="M10 15H12C15.3137 15 18 12.3137 18 9C18 5.68629 15.3137 3 12 3H8C4.68629 3 2 5.68629 2 9C2 10.5367 2.57771 11.9385 3.52779 13M16 21C19.3137 21 22 18.3137 22 15C22 13.4633 21.4223 12.0615 20.4722 11M12 21C8.68629 21 6 18.3137 6 15C6 11.6863 8.68629 9 12 9H14"
                    stroke="#cacaca"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    class="group-hover:stroke-blue-300"
                  />
                </svg>
              </a>
              {/* TODO: handle relative links */}
              <div
                class="markdown-content"
                innerHTML={unified()
                  .use(remarkParse)
                  .use(remarkRehype)
                  .use(rehypeStringify)
                  .processSync(content() || "")
                  .toString()}
              />
            </article>
          </Show>
        </Suspense>
      </main>
    </>
  );
}
