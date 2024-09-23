import Typography from "../Typography/Typography";

interface StarLevelProps {
  level: number;
  variant: "horizontal" | "vertical";
}

export default function StarLevel({ level, variant }: StarLevelProps) {
  let levelText = "";
  switch (level) {
    case 1:
      levelText = "Beginner";
      break;
    case 2:
      levelText = "Intermediate";
      break;
    case 3:
      levelText = "Advanced";
      break;
  }
  const Horizontal = () => {
    return (
      <div className="text-primary-default flex gap-1 border border-2 border-primary-default py-2.5 px-5 rounded-xm items-center">
        {[...Array(level)].map((i) => (
          <span
            className="material-symbols-outlined"
            style={{ fontSize: "1.250em" }}
            key={i}
          >
            star
          </span>
        ))}
        <Typography color="text-primary-default" variant="h5">
          {levelText}
        </Typography>
      </div>
    );
  };
  const Vertical = () => {
    return (
      <div className="text-primary-default">
        {[...Array(level)].map((i) => (
          <span
            className="material-symbols-outlined"
            style={{ fontSize: "1.125em" }}
            key={i}
          >
            star
          </span>
        ))}
        <Typography color="text-primary-default" variant="h6">
          {levelText}
        </Typography>
      </div>
    );
  };
  if (variant === "horizontal") return <Horizontal />;
  if (variant === "vertical") return <Vertical />;
}
