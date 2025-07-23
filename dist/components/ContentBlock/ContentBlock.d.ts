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
export default function ContentBlock({ featuredImage, featuredImageWidth, featuredImageHeight, featuredImageAlt, heading, content, hasBlockShadow, hasBorder, imagePosition, video, }: ContentBlockProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=ContentBlock.d.ts.map