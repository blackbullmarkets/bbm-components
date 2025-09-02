import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import Link from "next/link";
import { useState, useEffect } from "react";
import MainMenuListingComponent from "./MainMenuListingComponent";
import LinkButton from "../LinkButton/LinkButton";
export default function MainMenu({ logo, homepageUrl, menuItems, }) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [expandedMenuItem, setExpandedMenuItem] = useState(null);
    // Close menu on scroll
    useEffect(() => {
        const handleScroll = () => {
            if (isMobileMenuOpen) {
                setIsMobileMenuOpen(false);
            }
        };
        const handleKeyDown = (event) => {
            if (event.key === 'Escape' && isMobileMenuOpen) {
                setIsMobileMenuOpen(false);
            }
        };
        if (isMobileMenuOpen) {
            window.addEventListener('scroll', handleScroll);
            window.addEventListener('keydown', handleKeyDown);
            // Prevent background scrolling
            document.body.style.overflow = 'hidden';
        }
        else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'unset';
        };
    }, [isMobileMenuOpen]);
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };
    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
        setExpandedMenuItem(null);
    };
    const toggleMenuItem = (itemId) => {
        setExpandedMenuItem(expandedMenuItem === itemId ? null : itemId);
    };
    return (_jsxs(_Fragment, { children: [_jsxs("header", { className: "fixed z-50 shadow-xl w-full bg-white top-0 left-0", children: [_jsx("div", { className: "bg-primary-default hidden lg:block", children: _jsxs("div", { className: "container mx-auto py-2 flex justify-between", children: [_jsxs("ul", { className: "flex text-xm text-white/70 font-bold items-center", children: [_jsx("li", { className: "float-left", children: _jsx(Link, { className: "hover:text-white pr-2", href: "https://blackbull.com", children: "Personal" }) }), _jsx("li", { className: "float-left", children: _jsx(Link, { className: "hover:text-white pr-2", href: "https://partners.blackbull.com/", children: "Partners" }) }), _jsx("li", { className: "float-left", children: _jsx(Link, { className: "hover:text-white pr-2", href: "https://research.blackbull.com/", children: "Research" }) }), _jsx("li", { className: "float-left", children: _jsx(Link, { className: "hover:text-white pr-2", href: "https://academy.blackbull.com/", children: "Academy" }) })] }), _jsxs("ul", { className: "flex text-xm text-white/70 font-bold items-center", children: [_jsx("li", { className: "float-left pl-2", children: _jsx(Link, { className: "hover:text-white", href: "https://blackbull.com/en/refer-a-friend/", children: "Refer a Friend" }) }), _jsx("li", { className: "float-left pl-2", children: _jsx(LinkButton, { href: "https://secure.blackbull.com/", variant: "transparent", size: "top-menu", label: "Log In", bold: true }) }), _jsx("li", { className: "float-left pl-2", children: _jsx(LinkButton, { href: "https://secure.blackbull.com/auth/register-live", variant: "success", size: "top-menu", label: "Join Now", bold: true }) })] })] }) }), _jsxs("nav", { className: "container mx-auto flex justify-between items-center py-6", children: [_jsx(Link, { href: homepageUrl, className: "flex items-center", children: logo }), _jsx("div", { className: "hidden lg:block", children: _jsx(MainMenuListingComponent, { parentMenuItems: menuItems }) }), _jsx("button", { className: "lg:hidden flex items-center justify-center w-10 h-10", onClick: toggleMobileMenu, "aria-label": "Toggle mobile menu", "aria-expanded": isMobileMenuOpen, "aria-controls": "mobile-menu", children: _jsx("span", { className: "material-symbols-outlined text-3xl", children: "menu" }) })] })] }), isMobileMenuOpen && (_jsxs("div", { id: "mobile-menu", className: "fixed inset-0 z-[60] bg-white lg:hidden flex flex-col h-screen", role: "dialog", "aria-modal": "true", "aria-labelledby": "mobile-menu-title", children: [_jsxs("div", { className: "flex justify-between items-center px-6 py-6 border-b border-gray-200 flex-shrink-0", children: [_jsx(Link, { href: homepageUrl, onClick: closeMobileMenu, id: "mobile-menu-title", className: "flex items-center", children: logo }), _jsx("button", { onClick: closeMobileMenu, className: "flex items-center justify-center w-10 h-10", "aria-label": "Close mobile menu", children: _jsx("span", { className: "material-symbols-outlined text-3xl", children: "close" }) })] }), _jsx("div", { className: "flex-1 overflow-y-auto min-h-0", children: _jsx("nav", { children: menuItems.map((item) => (_jsxs("div", { children: [_jsxs("button", { onClick: () => {
                                            if (item.childItems.length > 0) {
                                                toggleMenuItem(item.ID);
                                            }
                                            else {
                                                // For items without children, navigate directly
                                                window.location.href = item.url;
                                                closeMobileMenu();
                                            }
                                        }, className: "w-full px-6 py-4 text-left border-b border-gray-200 hover:bg-white flex justify-between items-center", children: [_jsx("span", { className: "text-sm font-bold text-black", children: item.title }), item.childItems.length > 0 && (_jsx("span", { className: `material-symbols-outlined text-lg transition-transform ${expandedMenuItem === item.ID ? 'rotate-180' : ''}`, children: "keyboard_arrow_down" }))] }), item.childItems.length > 0 && expandedMenuItem === item.ID && (_jsx("div", { className: "bg-white", children: item.childItems.map((child) => (_jsx(Link, { href: child.url, onClick: closeMobileMenu, className: "block px-8 py-3 text-sm font-normal text-black hover:bg-gray-100", children: child.title }, child.ID))) })), item.childItems.length === 0 && (_jsx(Link, { href: item.url, onClick: closeMobileMenu, className: "hidden", children: item.title }))] }, item.ID))) }) }), _jsxs("div", { className: "px-6 py-4 space-y-3 border-t border-gray-200 flex-shrink-0", children: [_jsx(Link, { href: "https://secure.blackbull.com/auth/register-live", className: "block w-full bg-success-dark text-white text-center py-4 px-8 rounded-xm font-semibold text-sm hover:bg-success-default", onClick: closeMobileMenu, children: "Join Now" }), _jsx(Link, { href: "https://secure.blackbull.com/", className: "block w-full bg-primary-default text-white text-center py-4 px-8 rounded-xm font-semibold text-sm hover:bg-primary-dark", onClick: closeMobileMenu, children: "Log In" })] }), _jsx("div", { className: "px-6 py-4 border-t border-gray-200 flex-shrink-0", children: _jsx("div", { className: "text-center", children: _jsxs("span", { className: "text-xs font-bold text-labelgray", children: [_jsx(Link, { href: "https://blackbull.com", className: "hover:text-primary-default", children: "Personal" }), _jsx("span", { className: "mx-2", children: "\u2022" }), _jsx(Link, { href: "https://partners.blackbull.com/", className: "hover:text-primary-default", children: "Partners" }), _jsx("span", { className: "mx-2", children: "\u2022" }), _jsx(Link, { href: "https://research.blackbull.com/", className: "hover:text-primary-default", children: "Research" }), _jsx("span", { className: "mx-2", children: "\u2022" }), _jsx(Link, { href: "https://academy.blackbull.com/", className: "hover:text-primary-default", children: "Academy" })] }) }) })] }))] }));
}
//# sourceMappingURL=MainMenu.js.map