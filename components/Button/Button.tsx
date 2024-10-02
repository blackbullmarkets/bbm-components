interface Props {
  id: string;
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
  size: "sm" | "base" | "lg";
  bold: boolean;
  onClickFn: any;
}

export default function Button({
  id = "button",
  variant = "primary",
  size = "base",
  label = "Link",
  bold = true,
  onClickFn = null,
}: Props) {
  let buttonColor = "";
  let sizeVariant = "";
  switch (variant) {
    case "primary":
      buttonColor =
        "bg-primary-default text-white border border-primary-default hover:bg-primary-dark hover:border-primary-dark active:border-white active:shadow-md";
      break;
    case "secondary":
      buttonColor =
        "bg-secondary-default text-white border border-secondary-default hover:bg-secondary-75 hover:border-secondary-75 active:border-white active:shadow-md";
      break;
    case "support":
      buttonColor =
        "bg-support-default text-white border border-support-default hover:bg-support-75 hover:border-support-75 active:border-white active:shadow-md";
      break;
    case "success":
      buttonColor =
        "bg-success-dark text-white border border-success-dark hover:bg-success-default hover:border-success-default active:border-white active:shadow-md";
      break;
    case "info":
      buttonColor =
        "bg-info-default text-white border border-info-default hover:bg-info-75 hover:border-info-75 active:border-white active:shadow-md";
      break;
    case "warning":
      buttonColor =
        "bg-warning-default text-white border border-warning-default hover:bg-warning-75 hover:border-warning-75 active:border-white active:shadow-md";
      break;
    case "danger":
      buttonColor =
        "bg-danger-default text-white border border-danger-default hover:bg-danger-75 hover:border-danger-75 active:border-white active:shadow-md";
      break;
    case "light":
      buttonColor =
        "bg-light-default border text-primary-default hover:border-primary-default active:border-white active:shadow-md";
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
    <button
      id={id}
      type="button"
      className={`${buttonColor} ${sizeVariant} ${
        bold && "font-semibold"
      } text-sm rounded-xm`}
      onClick={onClickFn}
    >
      {label}
    </button>
  );
}
