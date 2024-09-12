import Link from "next/link";

interface Props {
  href: string;
  label: string;
  variant:
    | string
    | "primary"
    | "secondary"
    | "support"
    | "success"
    | "info"
    | "warning"
    | "danger";
  size: string | "sm" | "base" | "lg";
  bold: boolean;
}

export default function LinkButton({
  href = "https://blackbull.com",
  variant = "primary",
  size = "base",
  label = "Link",
  bold = true,
}: Props) {
  let buttonColor = "";
  let sizeVariant = "";
  switch (variant) {
    case "primary":
      buttonColor = "bg-primary-default text-white";
      break;
    case "secondary":
      buttonColor = "bg-secondary-default text-white";
      break;
    case "support":
      buttonColor = "bg-support-default text-white";
      break;
    case "success":
      buttonColor = "bg-success-default text-white";
      break;
    case "info":
      buttonColor = "bg-info-default text-white";
      break;
    case "warning":
      buttonColor = "bg-warning-default text-white";
      break;
    case "danger":
      buttonColor = "bg-danger-default text-white";
      break;
  }
  switch (size) {
    case "sm":
      sizeVariant = "py-2 px-3";
      break;
    case "base":
      sizeVariant = "py-3 px-4";
      break;
    case "lg":
      sizeVariant = "py-4 px-8";
  }

  return (
    <Link
      href={href}
      className={`${buttonColor} ${sizeVariant} ${
        bold && "font-semibold"
      } text-sm rounded-xm`}
    >
      {label}
    </Link>
  );
}
