import Image from "next/image";
import Typography from "../Typography/Typography";

interface ContentBlockProps {
  featuredImage: string;
  featuredImageWidth: number;
  featuredImageHeight: number;
  featuredImageAlt: string;
  heading: string;
  content: string | React.ReactNode;
  hasBlockShadow: boolean;
  hasBorder: boolean;
  imagePosition: "left" | "right";
  video: string;
}

export default function ContentBlock({
  featuredImage,
  featuredImageWidth,
  featuredImageHeight,
  featuredImageAlt,
  heading,
  content,
  hasBlockShadow,
  hasBorder,
  imagePosition,
  video = "",
}: ContentBlockProps) {
  return (
    <section
      className={`container mx-auto flex gap-6 p-8 
        ${imagePosition === "left" ? "flex-row" : "flex-row-reverse"}
        ${hasBlockShadow && "shadow-lg"} 
        ${hasBorder && "border border-4 border-black-25 rounded-xm"}`}
    >
      <div className="basis-1/2">
        {!video && (
          <Image
            src={featuredImage}
            width={featuredImageWidth}
            height={featuredImageHeight}
            alt={featuredImageAlt}
          />
        )}
        {video && (
          <iframe
            className="mb-12"
            width="100%"
            frameBorder="no"
            height="490"
            scrolling="no"
            src={video}
          />
        )}
      </div>
      <div className="flex flex-col gap-6 basis-1/2 justify-center">
        <Typography variant="h3" color="text-primary-default">
          {heading}
        </Typography>
        <div className="text-base text-black-50">{content}</div>
      </div>
    </section>
  );
}
