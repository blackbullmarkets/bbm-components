import Link from "next/link";

interface Props {
  href: string;
  label: string;
  variant:
    | string
    | "primary"
    | "secondary"
    | "light"
    | "support"
    | "success"
    | "info"
    | "warning"
    | "danger"
    | "inactive";
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
      buttonColor = "bg-primary-default text-white hover:bg-primary-dark";
      break;
    case "secondary":
      buttonColor = "bg-secondary-default text-white hover:bg-secondary-75";
      break;
    case "support":
      buttonColor = "bg-support-default text-white hover:bg-support-75";
      break;
    case "success":
      buttonColor = "bg-success-dark text-white hover:bg-success-default";
      break;
    case "info":
      buttonColor = "bg-info-default text-white hover:bg-info-75";
      break;
    case "warning":
      buttonColor = "bg-warning-default text-white hover:bg-warning-75";
      break;
    case "danger":
      buttonColor = "bg-danger-default text-white hover:bg-danger-75";
      break;
    case "light":
      buttonColor =
        "bg-light-default border text-primary-default hover:border-primary-default";
      break;
    case "inactive":
      buttonColor =
        "bg-black-25 text-black-75 pointer-events-none cursor-not-allowed";
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
