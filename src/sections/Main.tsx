interface MainProps {
  className?: string;
}

export default function Main(props: MainProps) {
  return (
    <section
      class={`flex snap-start items-center px-[8%] text-white ${props.className}`}
    >
      <main class="space-y-7">
        <h1 class="font-logo text-7xl md:text-8xl text-violet-50">
          Seg
          <span class="text-red-400 underline decoration-red-400 decoration-wavy decoration-2">
            fault
          </span>{" "}
          Club
        </h1>
        <div class="space-y-4 font-mono text-lg md:text-xl">
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
  );
}
