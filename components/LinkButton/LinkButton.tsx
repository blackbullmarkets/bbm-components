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
    | "transparent"
    | "inactive";
  size: "sm" | "base" | "lg" | "top-menu";
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
      buttonColor =
        "bg-primary-default text-white hover:bg-primary-dark inline-block";
      break;
    case "secondary":
      buttonColor =
        "bg-secondary-default text-white hover:bg-secondary-75 inline-block";
      break;
    case "support":
      buttonColor =
        "bg-support-default text-white hover:bg-support-75 inline-block";
      break;
    case "success":
      buttonColor =
        "bg-success-dark text-white hover:bg-success-default inline-block";
      break;
    case "info":
      buttonColor = "bg-info-default text-white hover:bg-info-75 inline-block";
      break;
    case "warning":
      buttonColor =
        "bg-warning-default text-white hover:bg-warning-75 inline-block";
      break;
    case "danger":
      buttonColor =
        "bg-danger-default text-white hover:bg-danger-75 inline-block";
      break;
    case "light":
      buttonColor =
        "bg-light-default border text-primary-default hover:border-primary-default inline-block";
      break;
    case "inactive":
      buttonColor =
        "bg-black-25 text-black-75 pointer-events-none cursor-not-allowed inline-block";
      break;
    case "transparent":
      buttonColor =
        "text-white/70 border border-white/70 hover:border-white hover:text-white inline-block";
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
      break;
    case "top-menu":
      sizeVariant = "py-1.5 px-2.5";
      break;
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
