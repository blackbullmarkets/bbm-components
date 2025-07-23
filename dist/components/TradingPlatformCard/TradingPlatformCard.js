import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Image from "next/image";
import Typography from "../Typography/Typography";
import LinkButton from "../LinkButton/LinkButton";
export default function TradingPlatformCard({ title, link_to, icon, excerpt, }) {
    return (_jsxs("div", { className: "p-8 bg-white rounded-sm flex flex-col justify-start items-start border-2 border-primary-default rounded-xm gap-5", children: [_jsxs("div", { className: "flex gap-2 items-center mb-2", children: [_jsx(Image, { src: `/platform_icons/${icon}.svg`, width: 50, height: 50, alt: excerpt }), _jsx(Typography, { variant: "h4", color: "text-black-default", children: title })] }), _jsx(Typography, { variant: "body", color: "text-black-50", children: excerpt }), _jsx(LinkButton, { variant: "light", href: link_to, label: "Learn more", size: "base", bold: true })] }));
}
//# sourceMappingURL=TradingPlatformCard.js.map