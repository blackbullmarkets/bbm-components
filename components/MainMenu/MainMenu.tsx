import Link from "next/link";
import { useState, useEffect } from "react";
import MainMenuListingComponent from "./MainMenuListingComponent";
import LinkButton from "../LinkButton/LinkButton";

interface ChildItem {
  ID: number;
  title: string;
  url: string;
}

type MenuItem = ChildItem & {
  childItems: ChildItem[];
};

interface MainMenuProps {
  logo: React.ReactNode;
  homepageUrl: string;
  menuItems: MenuItem[];
}

export default function MainMenu({
  logo,
  homepageUrl,
  menuItems,
}: MainMenuProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedMenuItem, setExpandedMenuItem] = useState<number | null>(null);

  // Close menu on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      window.addEventListener('scroll', handleScroll);
      window.addEventListener('keydown', handleKeyDown);
      // Prevent background scrolling
      document.body.style.overflow = 'hidden';
    } else {
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

  const toggleMenuItem = (itemId: number) => {
    setExpandedMenuItem(expandedMenuItem === itemId ? null : itemId);
  };
  return (
    <>
      <header className="fixed z-50 shadow-xl w-full bg-white top-0 left-0">
        {/* Top Bar - Hidden on mobile/tablet */}
        <div className="bg-primary-default hidden lg:block">
          <div className="container mx-auto py-2 flex justify-between">
            <ul className="flex text-xm text-white/70 font-bold items-center">
              <li className="float-left">
                <Link
                  className="hover:text-white pr-2"
                  href="https://blackbull.com"
                >
                  Personal
                </Link>
              </li>
              <li className="float-left">
                <Link
                  className="hover:text-white pr-2"
                  href="https://partners.blackbull.com/"
                >
                  Partners
                </Link>
              </li>
              <li className="float-left">
                <Link
                  className="hover:text-white pr-2"
                  href="https://research.blackbull.com/"
                >
                  Research
                </Link>
              </li>
              <li className="float-left">
                <Link
                  className="hover:text-white pr-2"
                  href="https://academy.blackbull.com/"
                >
                  Academy
                </Link>
              </li>
            </ul>
            <ul className="flex text-xm text-white/70 font-bold items-center">
              <li className="float-left pl-2">
                <Link
                  className="hover:text-white"
                  href="https://blackbull.com/en/refer-a-friend/"
                >
                  Refer a Friend
                </Link>
              </li>
              <li className="float-left pl-2">
                <LinkButton
                  href="https://secure.blackbull.com/"
                  variant="transparent"
                  size="top-menu"
                  label="Log In"
                  bold
                />
              </li>
              <li className="float-left pl-2">
                <LinkButton
                  href="https://secure.blackbull.com/auth/register-live"
                  variant="success"
                  size="top-menu"
                  label="Join Now"
                  bold
                />
              </li>
            </ul>
          </div>
        </div>

        {/* Main Navigation */}
        <nav className="container mx-auto flex justify-between items-center py-6">
          <Link href={homepageUrl} className="flex items-center">
            {logo}
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden lg:block">
            <MainMenuListingComponent parentMenuItems={menuItems} />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden flex items-center justify-center w-10 h-10"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            <span className="material-symbols-outlined text-3xl">
              menu
            </span>
          </button>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          id="mobile-menu"
          className="fixed inset-0 z-[60] bg-white lg:hidden flex flex-col h-screen"
          role="dialog"
          aria-modal="true"
          aria-labelledby="mobile-menu-title"
        >
          {/* Header with logo and close button */}
          <div className="flex justify-between items-center px-6 py-6 border-b border-gray-200 flex-shrink-0">
            <Link 
              href={homepageUrl} 
              onClick={closeMobileMenu}
              id="mobile-menu-title"
              className="flex items-center"
            >
              {logo}
            </Link>
            <button
              onClick={closeMobileMenu}
              className="flex items-center justify-center w-10 h-10"
              aria-label="Close mobile menu"
            >
              <span className="material-symbols-outlined text-3xl">
                close
              </span>
            </button>
          </div>

          {/* Navigation Links with Accordion - Scrollable */}
          <div className="flex-1 overflow-y-auto min-h-0">
            <nav>
              {menuItems.map((item) => (
                <div key={item.ID}>
                  <button
                    onClick={() => {
                      if (item.childItems.length > 0) {
                        toggleMenuItem(item.ID);
                      } else {
                        // For items without children, navigate directly
                        window.location.href = item.url;
                        closeMobileMenu();
                      }
                    }}
                    className="w-full px-6 py-4 text-left border-b border-gray-200 hover:bg-white flex justify-between items-center"
                  >
                    <span className="text-sm font-bold text-black">
                      {item.title}
                    </span>
                    {item.childItems.length > 0 && (
                      <span className={`material-symbols-outlined text-lg transition-transform ${
                        expandedMenuItem === item.ID ? 'rotate-180' : ''
                      }`}>
                        keyboard_arrow_down
                      </span>
                    )}
                  </button>
                  
                  {/* Child Items */}
                  {item.childItems.length > 0 && expandedMenuItem === item.ID && (
                    <div className="bg-white">
                      {item.childItems.map((child) => (
                        <Link
                          key={child.ID}
                          href={child.url}
                          onClick={closeMobileMenu}
                          className="block px-8 py-3 text-sm font-normal text-black hover:bg-gray-100"
                        >
                          {child.title}
                        </Link>
                      ))}
                    </div>
                  )}
                  
                  {/* Direct link for items without children */}
                  {item.childItems.length === 0 && (
                    <Link
                      href={item.url}
                      onClick={closeMobileMenu}
                      className="hidden"
                    >
                      {item.title}
                    </Link>
                  )}
                </div>
              ))}
            </nav>
          </div>

          {/* Action Buttons - Fixed at bottom */}
          <div className="px-6 py-4 space-y-3 border-t border-gray-200 flex-shrink-0">
            <Link
              href="https://secure.blackbull.com/auth/register-live"
              className="block w-full bg-success-dark text-white text-center py-4 px-8 rounded-xm font-semibold text-sm hover:bg-success-default"
              onClick={closeMobileMenu}
            >
              Join Now
            </Link>
            <Link
              href="https://secure.blackbull.com/"
              className="block w-full bg-primary-default text-white text-center py-4 px-8 rounded-xm font-semibold text-sm hover:bg-primary-dark"
              onClick={closeMobileMenu}
            >
              Log In
            </Link>
          </div>

          {/* Footer Links - Fixed at bottom */}
          <div className="px-6 py-4 border-t border-gray-200 flex-shrink-0">
            <div className="text-center">
              <span className="text-xs font-bold text-labelgray">
                <Link href="https://blackbull.com" className="hover:text-primary-default">
                  Personal
                </Link>
                <span className="mx-2">•</span>
                <Link href="https://partners.blackbull.com/" className="hover:text-primary-default">
                  Partners
                </Link>
                <span className="mx-2">•</span>
                <Link href="https://research.blackbull.com/" className="hover:text-primary-default">
                  Research
                </Link>
                <span className="mx-2">•</span>
                <Link href="https://academy.blackbull.com/" className="hover:text-primary-default">
                  Academy
                </Link>
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
