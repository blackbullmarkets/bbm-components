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
export default function MainMenu({ logo, homepageUrl, menuItems, }: MainMenuProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=MainMenu.d.ts.map