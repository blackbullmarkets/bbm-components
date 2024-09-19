interface TypoProps {
  variant:
    | "headline"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "subheading-lg"
    | "subheading-md"
    | "subheading-sm"
    | "body-lg"
    | "body"
    | "caption";
  children: React.ReactNode | string;
  color:
    | "text-black"
    | "text-primary-default"
    | "text-secondary-default"
    | "text-support-default"
    | "text-success-default"
    | "text-info-default"
    | "text-warning-default"
    | "text-danger-default"
    | "text-light-default"
    | string;
}

export default function Typography({ variant, children, color }: TypoProps) {
  let Tag = "";
  let textStyle = "";
  switch (variant) {
    case "headline":
      textStyle = "text-max font-bold leading-none";
      Tag = "h1";
      break;
    case "h1":
      textStyle = "text-xxxl font-bold leading-none";
      Tag = "h1";
      break;
    case "h2":
      textStyle = "text-xxl font-bold leading-none";
      Tag = "h2";
      break;
    case "h3":
      textStyle = "text-xl font-bold leading-none";
      Tag = "h3";
      break;
    case "h4":
      textStyle = "text-lg font-bold leading-none";
      Tag = "h4";
      break;
    case "h5":
      textStyle = "text-base font-bold leading-none";
      Tag = "h5";
      break;
    case "h6":
      textStyle = "text-xm font-bold leading-none";
      Tag = "h6";
      break;
    case "subheading-lg":
      textStyle = "text-lg font-semibold uppercase leading-none";
      Tag = "h4";
      break;
    case "subheading-md":
      textStyle = "text-md font-semibold uppercase leading-none";
      Tag = "h5";
      break;
    case "subheading-sm":
      textStyle = "text-sm font-semibold uppercase leading-none";
      Tag = "h6";
      break;
    case "body":
      textStyle = "text-base";
      Tag = "p";
      break;
    case "body-lg":
      textStyle = "text-md";
      Tag = "p";
      break;
  }
  return <Tag className={`${textStyle} ${color}`}>{children}</Tag>;
}
