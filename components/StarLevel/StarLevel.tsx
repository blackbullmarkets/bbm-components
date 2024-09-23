import Typography from "../Typography/Typography";

interface StarLevelProps {
  level: number;
}

export default function StarLevel({ level }: StarLevelProps) {
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
}
