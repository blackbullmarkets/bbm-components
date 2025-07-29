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
        }, children: _jsxs("div", { className: "container mx-auto py-8 md:py-12 lg:py-16 px-8 lg:px-0", children: [_jsxs("div", { className: "hidden lg:flex lg:items-center lg:gap-8", children: [_jsxs("div", { className: "flex flex-col items-start gap-6 flex-1", children: [_jsx(Typography, { variant: "h1", color: "text-black", children: heading }), _jsx("div", { className: "text-md text-black-50", children: subheading }), hasButtonLink && (_jsx(LinkButton, { href: buttonLinkHref, variant: "success", label: buttonLinkLabel, size: "lg", bold: true }))] }), _jsx("div", { className: "flex-shrink-0", children: _jsx(Image, { src: featuredImage, width: featuredImageWidth, height: featuredImageHeight, alt: featuredImageAlt }) })] }), _jsxs("div", { className: "flex flex-col lg:hidden", children: [_jsx("div", { className: "flex justify-center mb-6 md:mb-8", children: _jsx(Image, { src: featuredImage, width: featuredImageWidth * 0.8, height: featuredImageHeight * 0.8, alt: featuredImageAlt, className: "max-w-full h-auto" }) }), _jsxs("div", { className: "flex flex-col items-start text-left gap-4 md:gap-6", children: [_jsx("h1", { className: "text-[2em] md:text-[3em] font-bold leading-tight text-black", children: heading }), _jsx("div", { className: "text-sm md:text-base text-black-50 max-w-md", children: subheading }), hasButtonLink && (_jsx(LinkButton, { href: buttonLinkHref, variant: "success", label: buttonLinkLabel, size: "base", bold: true }))] })] })] }) }));
}
//# sourceMappingURL=HeroSection.js.map