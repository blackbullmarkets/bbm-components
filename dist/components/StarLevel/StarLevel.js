import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Typography from "../Typography/Typography";
export default function StarLevel({ level, variant }) {
    let levelText = "";
    switch (level) {
        case 1:
            levelText = "Beginner";
            break;
        case 2:
            levelText = "Intermediate";
            break;
        case 3:
            levelText = "Advanced";
            break;
    }
    const Horizontal = () => {
        return (_jsxs("div", { className: "text-primary-default flex gap-1 border border-2 border-primary-default py-2.5 px-5 rounded-xm items-center", children: [[...Array(level)].map((i) => (_jsx("span", { className: "material-symbols-outlined", style: { fontSize: "1.250em" }, children: "star" }, i))), _jsx(Typography, { color: "text-primary-default", variant: "h5", children: levelText })] }));
    };
    const Vertical = () => {
        return (_jsxs("div", { className: "text-primary-default", children: [[...Array(level)].map((i) => (_jsx("span", { className: "material-symbols-outlined", style: { fontSize: "1.125em" }, children: "star" }, i))), _jsx(Typography, { color: "text-primary-default", variant: "h6", children: levelText })] }));
    };
    if (variant === "horizontal")
        return _jsx(Horizontal, {});
    if (variant === "vertical")
        return _jsx(Vertical, {});
}
//# sourceMappingURL=StarLevel.js.map