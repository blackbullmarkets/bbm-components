import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Typography from "../Typography/Typography";
export default function IndividualLesson({ title, content, }) {
    return (_jsx("section", { children: _jsxs("article", { children: [_jsx(Typography, { variant: "h2", color: "text-black", children: title }), _jsx("div", { children: content })] }) }));
}
//# sourceMappingURL=IndividualLesson.js.map