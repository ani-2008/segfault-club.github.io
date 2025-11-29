import User from "../components/User";

export default function Members() {
  return (
    <section class="h-screen w-full snap-start overflow-y-scroll bg-slate-900/60 p-4 text-white backdrop-blur-sm [scrollbar-width:none]">
      <h2 class="m-6 text-center text-4xl font-bold text-slate-300 underline underline-offset-10">
        Our Committee Members
      </h2>
      <ul class="mg:gap-7 mx-auto mt-15 flex max-w-3/4 flex-wrap items-center justify-center lg:gap-12">
        <li>
          <User
            username="Thatmagicalcat"
            avatarUrl="https://avatars.githubusercontent.com/u/85670037"
            githubUrl="https://github.com/thatmagicalcat"
          />
        </li>
        <li>
          <User
            username="Wicks"
            avatarUrl="https://avatars.githubusercontent.com/u/167521638"
            githubUrl="https://github.com/Wickslynx"
          />
        </li>
        <li>
          <User
            username="DuskyElf"
            avatarUrl="https://avatars.githubusercontent.com/u/91879372"
            githubUrl="https://github.com/DuskyElf"
          />
        </li>
        <li>
          <User
            username="ItsCoral"
            avatarUrl="https://avatars.githubusercontent.com/u/200485543"
            githubUrl="https://github.com/ItsCoral0301"
          />
        </li>
        <li>
          <User
            username="Diego Evaristo"
            avatarUrl="https://avatars.githubusercontent.com/u/186722487"
            githubUrl="https://github.com/foo8664"
          />
        </li>
      </ul>
    </section>
  );
}
