import Link from "next/link";

export const NavBar = () => {
  return (
    <header className="w-full absolute">
      <nav className="text-white h-12 flex items-center p-8">
        <span className="text-2xl font-extrabold">ryokou</span>
        <Link href="#" className="ml-auto mr-6">
          home
        </Link>
        <Link href="#" className="mr-6">
          explore
        </Link>
        <Link href="#" className="mr-6">
          destinations
        </Link>
      </nav>
    </header>
  );
};
