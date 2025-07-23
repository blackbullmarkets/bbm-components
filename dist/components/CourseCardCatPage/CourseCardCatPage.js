import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Image from "next/image";
import StarLevel from "../StarLevel/StarLevel";
import Typography from "../Typography/Typography";
import LinkButton from "../LinkButton/LinkButton";
export default function CourseCardCatPage({ level, categoryTitle, categoryDescription, featuredImage, categoryLink, imageHeight = 270, imageWidth = 480, }) {
    return (_jsxs("div", { className: "w-full flex gap-8 py-6 items-start", children: [_jsx(Image, { src: featuredImage, width: imageWidth, height: imageHeight, alt: categoryTitle }), _jsxs("div", { className: "flex flex-col items-start gap-4", children: [level > 0 && _jsx(StarLevel, { level: level, variant: "horizontal" }), _jsx(Typography, { variant: "h2", color: "text-black-default", children: categoryTitle }), _jsx(Typography, { variant: "body-lg", color: "text-black-50", children: categoryDescription }), _jsx(LinkButton, { href: categoryLink, variant: "success", size: "lg", label: "Start course", bold: true })] })] }));
}
//# sourceMappingURL=CourseCardCatPage.js.map