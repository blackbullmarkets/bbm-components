import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Typography from "../Typography/Typography";
import CourseCard from "../CourseCard/CourseCard";
export default function CourseCardBlock({ lessonList, blockTitle, }) {
    return (_jsx("section", { className: "py-20 bg-lightgray", children: _jsxs("div", { className: "container mx-auto", children: [_jsx("div", { className: "text-center mb-12", children: _jsx(Typography, { variant: "h2", color: "text-primary-default", children: blockTitle }) }), _jsx("div", { className: "grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 px-5", children: lessonList.length != 0 &&
                        lessonList.map((lesson) => (_jsx(CourseCard, { excerpt: lesson.courseTitle, level: lesson.level, courseTitle: lesson.courseTitle, courseLink: lesson.courseLink, featuredImage: lesson.featuredImage, lessonNumber: lesson.lessonNumber, lessonDuration: lesson.lessonDuration, lessonTotal: lesson.lessonTotal }, lesson.ID))) })] }) }));
}
//# sourceMappingURL=CourseCardBlock.js.map