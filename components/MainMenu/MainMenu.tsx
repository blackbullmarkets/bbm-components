import Link from "next/link";
import MainMenuListingComponent from "./MainMenuListingComponent";

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
      <nav className="container mx-auto flex items-center justify-between px-6 pt-3.5">
        <Link href={homepageUrl}>{logo}</Link>
        <MainMenuListingComponent parentMenuItems={menuItems} />
      </nav>
    </header>
  );
}
