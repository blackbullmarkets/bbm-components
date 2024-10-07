import Typography from "../Typography/Typography";

interface DoubleLineLinkButtonProps {
  href: string;
  firstLine: string;
  secondLine: string;
  variant: "success" | string;
  icon: string;
}

export default function DoubleLineLinkButton({
  href,
  firstLine,
  secondLine,
  variant,
  icon,
}: DoubleLineLinkButtonProps) {
  return (
    <a
      href={href}
      className="bg-success-dark inline-block flex flex-row py-4 px-8 rounded-xm items-center gap-2.5"
    >
      <span
        class="material-symbols-outlined"
        style={{ fontSize: "1.5em", color: "#fff" }}
      >
        play_circle
      </span>
      <div>
        <Typography variant="body" color="text-white">
          Next Lesson
        </Typography>
        <Typography variant="body" color="text-white">
          How do you trade Forex?
        </Typography>
      </div>
    </a>
  );
}
