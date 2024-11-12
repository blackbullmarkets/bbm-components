import Typography from "../Typography/Typography";
import parse from "html-react-parser";

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
  icon,
}: DoubleLineLinkButtonProps) {
  return (
    <a
      href={href}
      className="bg-success-dark inline-block flex flex-row py-4 px-8 rounded-xm items-center gap-2.5 hover:bg-success-default"
    >
      <span
        className="material-symbols-outlined"
        style={{ fontSize: "1.5em", color: "#fff" }}
      >
        {icon}
      </span>
      <div>
        <Typography variant="body-sm" color="text-white">
          <strong>{firstLine}</strong>
        </Typography>
        <Typography variant="body-sm" color="text-white">
          {parse(secondLine)}
        </Typography>
      </div>
    </a>
  );
}
