import Image from "next/image";
import StarLevel from "../StarLevel/StarLevel";
import Typography from "../Typography/Typography";
import LinkButton from "../LinkButton/LinkButton";

interface CourseCardCatPageProps {
  level: number;
  categoryTitle: string;
  featuredImage: string;
  categoryDescription: string;
  categoryLink: string;
}

export default function CourseCardCatPage({
  level,
  categoryTitle,
  categoryDescription,
  featuredImage,
  categoryLink,
}: CourseCardCatPageProps) {
  return (
    <div className="w-full flex gap-8 py-6">
      <Image src={featuredImage} width={360} height={280} alt={categoryTitle} />
      <div className="flex flex-col items-start gap-4">
        <StarLevel level={level} variant="horizontal" />
        <Typography variant="h2" color="text-black-default">
          {categoryTitle}
        </Typography>
        <Typography variant="body-lg" color="text-black-50">
          {categoryDescription}
        </Typography>
        <LinkButton
          href={categoryLink}
          variant="success"
          size="lg"
          label="Start course"
          bold
        />
      </div>
    </div>
  );
}
