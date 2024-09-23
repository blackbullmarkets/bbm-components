import Image from "next/image";
import Typography from "../Typography/Typography";
import StarLevel from "../StarLevel/StarLevel";

interface CourseCardProps {
  level: number;
  courseTitle: string;
  featuredImage: string;
  excerpt: string;
  lessonNumber: number;
  lessonTotal: number;
  lessonDuration: number;
}

export default function CourseCard({
  level,
  courseTitle,
  featuredImage,
  excerpt,
  lessonNumber,
  lessonTotal,
  lessonDuration,
}: CourseCardProps) {
  return (
    <div className="w-1/3 shadow-base p-8 flex flex-col gap-3">
      <StarLevel level={level} variant="vertical" />
      <Image
        src={featuredImage}
        width={360}
        height={280}
        alt={courseTitle}
      ></Image>
      <Typography color="text-primary-default" variant="h5">
        {courseTitle}
      </Typography>
      <Typography color="text-black-50" variant="caption">
        {excerpt}
      </Typography>
      <Typography color="text-black" variant="caption">
        Lesson {lessonNumber} of {lessonTotal} | {lessonDuration} Min
      </Typography>
    </div>
  );
}
