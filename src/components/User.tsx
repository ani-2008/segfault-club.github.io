interface UserProps {
  username: string;
  avatarUrl: string;
  githubUrl: string;
}

export default function User(props: UserProps) {
  return (
    <a
      href={props.githubUrl}
      target="_blank"
      class="group flex w-40 flex-col items-center space-y-5 p-5 transition duration-100 hover:scale-115 lg:w-50"
    >
      <img
        src={props.avatarUrl}
        alt="Discord Profile Picture"
        class="aspect-square w-full rounded-full shadow-lg shadow-black/50 transition duration-100 group-hover:-rotate-5 group-hover:shadow-slate-200/50"
      />
      <span class="font-mono text-base text-slate-200 group-hover:underline lg:text-lg">
        {props.username}
      </span>
    </a>
  );
}
