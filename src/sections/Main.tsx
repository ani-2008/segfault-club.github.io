interface MainProps {
  className?: string;
}

export default function Main(props: MainProps) {
  return (
    <section
      class={`flex snap-start items-center px-[8%] text-white ${props.className}`}
    >
      <main class="space-y-7">
        <h1 class="font-logo fade-down text-7xl text-violet-50 md:text-8xl">
          Seg
          <span class="text-red-400 underline decoration-red-400 decoration-wavy decoration-2">
            fault
          </span>{" "}
          Club
        </h1>
        <div class="space-y-4 font-mono text-lg md:text-xl">
          <p class="fade-down [--fade-in-delay:_50ms]">
            Linux, Debugging, Chaos and legendary segfaults
          </p>
          <a
            class="fade-down rounded bg-slate-700 p-2 transition [--fade-in-delay:_300ms] hover:bg-slate-600"
            href="https://discord.gg/gohar"
            target="_blank"
          >
            Join{" "}
            <span class="fade-down underline decoration-blue-400 decoration-2 [--fade-in-delay:_400ms]">
              @discord.gg/gohar
            </span>
          </a>
        </div>
      </main>
    </section>
  );
}
