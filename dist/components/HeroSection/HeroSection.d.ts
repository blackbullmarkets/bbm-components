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
export default function HeroSection({ heading, subheading, hasButtonLink, buttonLinkLabel, buttonLinkHref, bgImage, featuredImage, featuredImageHeight, featuredImageWidth, featuredImageAlt, }: HeroProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=HeroSection.d.ts.map