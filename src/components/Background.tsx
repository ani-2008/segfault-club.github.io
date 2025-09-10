interface BackgroundProps {
  src: string;
}

export default function Background(props: BackgroundProps) {
  return (
    <>
      <img
        src={props.src}
        alt="Linux user room"
        class="fixed -z-50 h-screen w-screen object-cover"
      />
      <div class="fixed inset-0 -z-50 bg-gradient-to-b from-slate-950/40 to-slate-950" />
    </>
  );
}
