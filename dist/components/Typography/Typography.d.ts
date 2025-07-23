interface TypoProps {
    variant: "headline" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "subheading-lg" | "subheading-md" | "subheading-sm" | "body-lg" | "body-sm" | "body" | "caption";
    children: React.ReactNode | string;
    color: "text-black" | "text-primary-default" | "text-secondary-default" | "text-support-default" | "text-success-default" | "text-info-default" | "text-warning-default" | "text-danger-default" | "text-light-default" | string;
}
export default function Typography({ variant, children, color }: TypoProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=Typography.d.ts.map