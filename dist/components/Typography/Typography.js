import { jsx as _jsx } from "react/jsx-runtime";
export default function Typography({ variant, children, color }) {
    let Tag = "";
    let textStyle = "";
    switch (variant) {
        case "headline":
            textStyle = "text-max font-bold leading-none";
            Tag = "h1";
            break;
        case "h1":
            textStyle = "text-xxxl font-bold leading-none";
            Tag = "h1";
            break;
        case "h2":
            textStyle = "text-xxl font-bold leading-none";
            Tag = "h2";
            break;
        case "h3":
            textStyle = "text-xl font-bold leading-none";
            Tag = "h3";
            break;
        case "h4":
            textStyle = "text-lg font-bold leading-none";
            Tag = "h4";
            break;
        case "h5":
            textStyle = "text-base font-bold leading-none";
            Tag = "h5";
            break;
        case "h6":
            textStyle = "text-xm font-bold leading-none";
            Tag = "h6";
            break;
        case "subheading-lg":
            textStyle = "text-lg font-semibold uppercase leading-none";
            Tag = "h4";
            break;
        case "subheading-md":
            textStyle = "text-md font-semibold uppercase leading-none";
            Tag = "h5";
            break;
        case "subheading-sm":
            textStyle = "text-sm font-semibold uppercase leading-none";
            Tag = "h6";
            break;
        case "body":
            textStyle = "text-base";
            Tag = "p";
            break;
        case "body-lg":
            textStyle = "text-md";
            Tag = "p";
            break;
        case "body-sm":
            textStyle = "text-sm";
            Tag = "p";
            break;
        case "caption":
            textStyle = "text-xm";
            Tag = "p";
            break;
    }
    return _jsx(Tag, { className: `${textStyle} ${color}`, children: children });
}
//# sourceMappingURL=Typography.js.map