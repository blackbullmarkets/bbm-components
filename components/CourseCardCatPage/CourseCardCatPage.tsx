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
  imageWidth: number;
  imageHeight: number;
}

export default function CourseCardCatPage({
  level,
  categoryTitle,
  categoryDescription,
  featuredImage,
  categoryLink,
  imageHeight = 270,
  imageWidth = 480,
}: CourseCardCatPageProps) {
  return (
    <div className="w-full flex gap-8 py-6 items-start">
      <Image
        src={featuredImage}
        width={imageWidth}
        height={imageHeight}
        alt={categoryTitle}
      />
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
