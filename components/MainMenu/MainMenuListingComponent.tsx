import Link from "next/link";

interface ChildItem {
  ID: number;
  title: string;
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
          <li
            key={item.ID}
            className="group float-left pt-2 px-2 pb-3.5 overflow-visible"
          >
            <Link href={`${item.url}`} className="font-bold text-base">
              {item.title}
              {item.childItems.length > 0 && (
                <span className="material-symbols-outlined align-bottom">
                  keyboard_arrow_down
                </span>
              )}
            </Link>
            {/* some of the styling for the last item in the submenus is found in globals.css */}
            <ul className="invisible group-hover:visible absolute shadow-xl -ml-4 mt-3.5">
              {item.childItems.length > 0 &&
                item.childItems.map((child: ChildItem) => (
                  <li
                    key={child.ID}
                    className="px-4 py-2 bg-white hover:bg-gray-200 text-gray-400 hover:text-black-default"
                  >
                    <Link href={`${child.url}`}>{child.title}</Link>
                  </li>
                ))}
            </ul>
          </li>
        ))}
    </ul>
  );
}
