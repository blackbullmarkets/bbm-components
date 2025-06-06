import Typography from "../Typography/Typography";
import Link from 'next/link';


/* "version": "0.1.9" */
interface SidebarCourseCardProps {
  title: string;
  duration: number;
  isActive: boolean;
  inProgress: boolean;
  isFinished: boolean;
  isPending: boolean;
  lessonUrl: string;
}

export default function SidebarCourseCard({
  title,
  duration,
  inProgress,
  isFinished,
  isPending,
  isActive,
  lessonUrl,
}: SidebarCourseCardProps) {
  const textColor = isActive ? "text-black-default" : "text-black-50";
  const textColorHex = isActive ? "#000" : "#7f7f7f";
  return (
    <div className="bg-lightgray p-4 flex items-center justify-between gap-5">
      {/* card body */}
      <div>
        {!inProgress ? (
            <Link href={lessonUrl}>
              <Typography variant="h5" color={`${textColor}`}>
                {title}
              </Typography>
            </Link>
        ) : (
            <Typography variant="h5" color={`${textColor}`}>
              {title}
            </Typography>
        )}
        <div className="mt-5">
          <div className="flex items-center gap-1">
            <span
              className="material-symbols-outlined"
              style={{ fontSize: "1.250em", color: textColorHex }}
            >
              schedule
            </span>
            <Typography variant="body" color={`${textColor}`}>
              {duration} Min.
            </Typography>
            <span
              className="material-symbols-outlined"
              style={{ fontSize: "1.250em", color: textColorHex }}
            >
              quiz
            </span>
            <Typography variant="body" color={`${textColor}`}>
              Quiz.
            </Typography>
          </div>
        </div>
      </div>
      {/* ends card body */}
      {/* card progress indicator */}
      <div>
        {inProgress && (
          <span
            className="material-symbols-outlined"
            style={{ color: "#13C640" }}
          >
            bar_chart
          </span>
        )}
        {isFinished && (
          <span
            className="material-symbols-outlined"
            style={{ color: "#13C640" }}
          >
            check_circle
          </span>
        )}
        {isPending && (
          <span
            className="material-symbols-outlined"
            style={{ color: "#7f7f7f" }}
          >
            check_circle
          </span>
        )}
      </div>
      {/* ends card progress indicator */}
    </div>
  );
}
