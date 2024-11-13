import Link from "next/link";
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
  return (
    <header className="fixed z-50 shadow-xl w-full bg-white top-0 left-0">
      <div className="bg-primary-default">
        <div className="container mx-auto px-6 py-2 flex justify-between">
          <ul className="inline-block text-xm text-white/70 font-bold flex items-center">
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
          <ul className="inline-block text-xm text-white/70 font-bold flex items-center">
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
      <nav className="container mx-auto flex justify-between px-6 pt-3.5">
        <Link href={homepageUrl}>{logo}</Link>
        <MainMenuListingComponent parentMenuItems={menuItems} />
      </nav>
    </header>
  );
}
