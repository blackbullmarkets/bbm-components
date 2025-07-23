import BlackBullAcademyLogo from "../../public/logo/bb-academy.svg";

interface BlackBullLogoProps {
  variant: "black" | "white" | "academy";
}

export default function BlackBullLogo({ variant }: BlackBullLogoProps) {
  if (variant === "academy") {
    return <BlackBullAcademyLogo />;
  }
}
