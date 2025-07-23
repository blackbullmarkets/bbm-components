import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import LinkButton from "../LinkButton/LinkButton";
import Typography from "../Typography/Typography";
import Image from "next/image";
export default function HeroSection({ heading, subheading, hasButtonLink, buttonLinkLabel, buttonLinkHref, bgImage, featuredImage, featuredImageHeight, featuredImageWidth, featuredImageAlt, }) {
    return (_jsx("section", { className: "w-full", style: {
            backgroundImage: `url(${bgImage})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
        }, children: _jsxs("div", { className: "container flex items-center mx-auto py-16", children: [_jsxs("div", { className: "flex flex-col items-start gap-6", children: [_jsx(Typography, { variant: "h1", color: "text-black", children: heading }), _jsx("div", { className: "text-md text-black-50", children: subheading }), hasButtonLink && (_jsx(LinkButton, { href: buttonLinkHref, variant: "success", label: buttonLinkLabel, size: "lg", bold: true }))] }), _jsx(Image, { src: featuredImage, width: featuredImageWidth, height: featuredImageHeight, alt: featuredImageAlt })] }) }));
}
//# sourceMappingURL=HeroSection.js.map