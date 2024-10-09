import Link from "next/link";
import BlackBullLogo from "../BlackBullLogo/BlackBullLogo";

export default async function MainMenu() {
  return (
    <header className="fixed z-50 drop-shadow-xl w-full bg-white">
      <nav className="container mx-auto flex items-center justify-between px-6 py-2">
        <Link href={`/`}>
          <BlackBullLogo variant="academy" />
        </Link>
      </nav>
    </header>
  );
}
