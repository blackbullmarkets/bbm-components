interface Props {
    id: string;
    label: string;
    variant: string | "primary" | "secondary" | "light" | "support" | "success" | "info" | "warning" | "danger" | "inactive";
    size: "sm" | "base" | "lg";
    bold: boolean;
    onClickFn?: () => void;
}
export default function Button({ id, variant, size, label, bold, onClickFn, }: Props): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=Button.d.ts.map