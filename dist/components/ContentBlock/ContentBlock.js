import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Image from "next/image";
import Typography from "../Typography/Typography";
export default function ContentBlock({ featuredImage, featuredImageWidth, featuredImageHeight, featuredImageAlt, heading, content, hasBlockShadow, hasBorder, imagePosition, video = "", }) {
    return (_jsxs("section", { className: `container mx-auto flex flex-col lg:flex-row gap-6 justify-items-center 
        ${imagePosition === "left" ? "flex-row" : "flex-row-reverse"}
        ${hasBlockShadow && "shadow-lg"} 
        ${hasBorder && "border-4 border-black-25 rounded-xm"}`, children: [_jsxs("div", { className: "basis-1/2 flex", children: [!video && (_jsx(Image, { className: "object-contain", src: featuredImage, alt: featuredImageAlt, height: featuredImageHeight, width: featuredImageWidth })), video && (_jsx("iframe", { frameBorder: "no", height: "384", width: "100%", scrolling: "no", src: video, allow: "fullscreen;" }))] }), _jsxs("div", { className: "flex flex-col gap-6 basis-1/2 justify-center", children: [_jsx(Typography, { variant: "h3", color: "text-primary-default", children: heading }), _jsx("div", { className: "text-base text-black-50", children: content })] })] }));
}
//# sourceMappingURL=ContentBlock.js.map