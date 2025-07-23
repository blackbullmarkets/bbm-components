interface Props {
    href: string;
    label: string;
    variant: string | "primary" | "secondary" | "light" | "support" | "success" | "info" | "warning" | "danger" | "transparent" | "inactive";
    size: "sm" | "base" | "lg" | "top-menu";
    bold: boolean;
}
export default function LinkButton({ href, variant, size, label, bold, }: Props): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=LinkButton.d.ts.map