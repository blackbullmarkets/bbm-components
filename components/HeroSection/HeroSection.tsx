import LinkButton from "../LinkButton/LinkButton";
import Typography from "../Typography/Typography";
import Image from "next/image";

interface HeroProps {
  heading: string;
  subheading: string;
  hasButtonLink: boolean;
  buttonLinkLabel: string;
  buttonLinkHref: string;
  bgImage: string;
  featuredImage: string;
  featuredImageWidth: number;
  featuredImageHeight: number;
  featuredImageAlt: string;
}

export default function HeroSection({
  heading,
  subheading,
  hasButtonLink,
  buttonLinkLabel,
  buttonLinkHref,
  bgImage,
  featuredImage,
  featuredImageHeight,
  featuredImageWidth,
  featuredImageAlt,
}: HeroProps) {
  return (
    <section
      className="w-full"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container flex items-center mx-auto py-16">
        <div className="flex flex-col items-start gap-6">
          <Typography variant="h1" color="text-black">
            {heading}
          </Typography>
          <Typography variant="body-lg" color="text-black-50">
            <div dangerouslySetInnerHTML={{ __html: subheading }}></div>
          </Typography>
          {hasButtonLink && (
            <LinkButton
              href={buttonLinkHref}
              variant="success"
              label={buttonLinkLabel}
              size="lg"
              bold
            ></LinkButton>
          )}
        </div>
        <Image
          src={featuredImage}
          width={featuredImageWidth}
          height={featuredImageHeight}
          alt={featuredImageAlt}
        />
      </div>
    </section>
  );
}
