import Image from "next/image";
import Typography from "../Typography/Typography";
import StarLevel from "../StarLevel/StarLevel";
import Link from "next/link";

interface CourseCardProps {
  level: number;
  courseTitle: string;
  courseLink: string;
  featuredImage: string;
  excerpt: string;
  lessonNumber: number;
  lessonTotal: number;
  lessonDuration: number;
}

export default function CourseCard({
  level,
  courseTitle,
  courseLink,
  featuredImage,
  excerpt,
  lessonNumber,
  lessonTotal,
  lessonDuration,
}: CourseCardProps) {
  return (
    <Link
      href={courseLink}
      className="shadow-base bg-white p-8 flex flex-col gap-3"
    >
      {level > 0 && <StarLevel level={level} variant="vertical" />}
      <Image src={featuredImage} width={360} height={280} alt={courseTitle} />
      <Typography color="text-primary-default" variant="h5">
        <Link href={courseLink}>{courseTitle}</Link>
      </Typography>
      <Typography color="text-black-50" variant="caption">
        {excerpt}
      </Typography>
      <Typography color="text-black" variant="caption">
        Lesson {lessonNumber} of {lessonTotal} | {lessonDuration} Min
      </Typography>
    </Link>
  );
}
