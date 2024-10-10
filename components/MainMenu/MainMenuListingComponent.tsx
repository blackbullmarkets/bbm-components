import Link from "next/link";

interface ChildItem {
  ID: number;
  menu_item_parent: string;
  post_title: string;
  url: string;
}

type MenuItem = ChildItem & {
  childItems: ChildItem[];
};

interface Props {
  parentMenuItems: MenuItem[];
}

export default function TopMenuComponent({ parentMenuItems }: Props) {
  return (
    <ul id="main-menu" className="relative">
      {parentMenuItems &&
        parentMenuItems.map((item: MenuItem) => (
          <li key={item.ID} className="group float-left p-2 overflow-visible">
            <Link href={`/${item.url}`} className="font-bold text-base">
              {item.post_title}
              {item.childItems.length > 0 && (
                <span className="material-symbols-outlined align-bottom">
                  keyboard_arrow_down
                </span>
              )}
            </Link>
            {/* some of the styling for the last item in the submenus is found in globals.css */}
            <ul className="invisible group-hover:visible absolute drop-shadow-xl -ml-4 mt-2">
              {item.childItems.length > 0 &&
                item.childItems.map((child: ChildItem) => (
                  <li
                    key={child.ID}
                    className="px-4 py-2 bg-white hover:bg-gray-200 text-gray-400 hover:text-black"
                  >
                    <Link href={`/${child.url}`}>{child.post_title}</Link>
                  </li>
                ))}
            </ul>
          </li>
        ))}
    </ul>
  );
}
