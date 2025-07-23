import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Typography from "../Typography/Typography";
import parse from "html-react-parser";
export default function DoubleLineLinkButton({ href, firstLine, secondLine, icon, }) {
    return (_jsxs("a", { href: href, className: "bg-success-dark inline-block flex flex-row py-4 px-8 rounded-xm items-center gap-2.5 hover:bg-success-default", children: [_jsx("span", { className: "material-symbols-outlined", style: { fontSize: "1.5em", color: "#fff" }, children: icon }), _jsxs("div", { children: [_jsx(Typography, { variant: "body-sm", color: "text-white", children: _jsx("strong", { children: firstLine }) }), _jsx(Typography, { variant: "body-sm", color: "text-white", children: parse(secondLine) })] })] }));
}
//# sourceMappingURL=DoubleLineLinkButton.js.map