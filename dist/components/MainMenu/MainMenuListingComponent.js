import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Link from "next/link";
export default function TopMenuComponent({ parentMenuItems }) {
    return (_jsx("ul", { id: "main-menu", className: "relative", children: parentMenuItems &&
            parentMenuItems.map((item) => (_jsxs("li", { className: "group float-left pt-2 px-2 pb-3.5 overflow-visible", children: [_jsxs(Link, { href: `${item.url}`, className: "font-bold text-base", children: [item.title, item.childItems.length > 0 && (_jsx("span", { className: "material-symbols-outlined align-bottom", children: "keyboard_arrow_down" }))] }), _jsx("ul", { className: "invisible group-hover:visible absolute shadow-xl -ml-4 mt-3.5", children: item.childItems.length > 0 &&
                            item.childItems.map((child) => (_jsx("li", { className: "px-4 py-2 bg-white hover:bg-gray-200 text-gray-400 hover:text-black-default", children: _jsx(Link, { href: `${child.url}`, children: child.title }) }, child.ID))) })] }, item.ID))) }));
}
//# sourceMappingURL=MainMenuListingComponent.js.map