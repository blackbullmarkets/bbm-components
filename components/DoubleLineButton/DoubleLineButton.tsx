import Typography from "../Typography/Typography";
import parse from "html-react-parser";

interface DoubleLineButtonProps {
  href: string;
  firstLine: string;
  secondLine: string;
  variant: "success" | string;
  icon: string;
  onClickFn?: () => void;
}

export default function DoubleLineButton({
  href,
  firstLine,
  secondLine,
  icon,
  onClickFn,
}: DoubleLineButtonProps) {
  return (
    <button
      className="bg-success-dark inline-block flex flex-row py-4 px-8 rounded-xm items-center gap-2.5 hover:bg-success-default"
      onClick={onClickFn}
    >
      <span
        className="material-symbols-outlined"
        style={{ fontSize: "1.5em", color: "#fff" }}
      >
        {icon}
      </span>
      <div className="text-left">
        <Typography variant="body-sm" color="text-white">
          <strong>{firstLine}</strong>
        </Typography>
        <Typography variant="body-sm" color="text-white">
          {parse(secondLine)}
        </Typography>
      </div>
    </button>
  );
}
