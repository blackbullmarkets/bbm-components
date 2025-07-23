import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Image from "next/image";
import Typography from "../Typography/Typography";
import StarLevel from "../StarLevel/StarLevel";
import Link from "next/link";
import parse from "html-react-parser";
export default function CourseCard({ level, courseTitle, courseLink, featuredImage, excerpt, lessonNumber, lessonTotal, lessonDuration, }) {
    return (_jsxs(Link, { href: courseLink, className: "shadow-base bg-white p-8 flex flex-col gap-3", children: [level > 0 && _jsx(StarLevel, { level: level, variant: "vertical" }), _jsx(Image, { src: featuredImage, width: 360, height: 280, alt: courseTitle }), _jsx(Typography, { color: "text-primary-default", variant: "h5", children: _jsx(Link, { href: courseLink, children: parse(courseTitle) }) }), excerpt && (_jsx(Typography, { color: "text-black-50", variant: "caption", children: parse(excerpt) })), lessonNumber && (_jsxs(Typography, { color: "text-black", variant: "caption", children: ["Lesson ", lessonNumber, " of ", lessonTotal, " | ", lessonDuration, " Min"] }))] }));
}
//# sourceMappingURL=CourseCard.js.map