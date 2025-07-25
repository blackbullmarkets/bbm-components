import LinkButton from "../LinkButton/LinkButton";
import Typography from "../Typography/Typography";
import Image from "next/image";

interface HeroProps {
  heading: string;
  subheading: string | React.ReactNode;
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
      <div className="container mx-auto py-8 md:py-12 lg:py-16">
        {/* Desktop Layout: Side by side */}
        <div className="hidden lg:flex lg:items-center lg:gap-8">
          <div className="flex flex-col items-start gap-6 flex-1">
            <Typography variant="h1" color="text-black">
              {heading}
            </Typography>
            <div className="text-md text-black-50">{subheading}</div>
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
          <div className="flex-shrink-0">
            <Image
              src={featuredImage}
              width={featuredImageWidth}
              height={featuredImageHeight}
              alt={featuredImageAlt}
            />
          </div>
        </div>

        {/* Tablet & Mobile Layout: Image on top, text below */}
        <div className="flex flex-col lg:hidden">
          {/* Image Section */}
          <div className="flex justify-center mb-6 md:mb-8">
            <Image
              src={featuredImage}
              width={featuredImageWidth * 0.8} // Slightly smaller on mobile/tablet
              height={featuredImageHeight * 0.8}
              alt={featuredImageAlt}
              className="max-w-full h-auto"
            />
          </div>
          
          {/* Text Section */}
          <div className="flex flex-col items-start text-left gap-4 md:gap-6">
            {/* Responsive Typography - 2em on mobile, 3em on tablet */}
            <h1 className="text-[2em] md:text-[3em] font-bold leading-tight text-black">
              {heading}
            </h1>
            <div className="text-sm md:text-base text-black-50 max-w-md">
              {subheading}
            </div>
            {hasButtonLink && (
              <LinkButton
                href={buttonLinkHref}
                variant="success"
                label={buttonLinkLabel}
                size="base"
                bold
              ></LinkButton>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
