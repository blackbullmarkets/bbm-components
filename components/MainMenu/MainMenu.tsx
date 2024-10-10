import Link from "next/link";
import MainMenuListingComponent from "./MainMenuListingComponent";

interface ChildItem {
  ID: number;
  menu_item_parent: string;
  post_title: string;
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
    <header className="fixed z-50 drop-shadow-xl w-full bg-white">
      <nav className="container mx-auto flex items-center justify-between px-6 py-2">
        <Link href={homepageUrl}>{logo}</Link>
        <MainMenuListingComponent parentMenuItems={menuItems} />
      </nav>
    </header>
  );
}
