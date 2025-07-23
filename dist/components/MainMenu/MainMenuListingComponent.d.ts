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
export default function TopMenuComponent({ parentMenuItems }: Props): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=MainMenuListingComponent.d.ts.map