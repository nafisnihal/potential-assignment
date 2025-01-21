import { navs } from "@/data/data";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="">
      <div className="container mx-auto pt-[60px] flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center space-x-4">
          <Link href="/" className="">
            <Image
              className="block dark:hidden"
              src="/assets/logo.png"
              alt="Logo"
              width={280}
              height={70}
            />
            <Image
              className="hidden dark:block"
              src="/assets/logo-dark.png"
              alt="Logo"
              width={280}
              height={70}
            />
          </Link>
        </div>

        <div className="flex items-center space-x-6">
          <div className="hidden md:flex space-x-3">
            {navs.map((nav, index) => (
              <Link
                key={index}
                href={nav.href}
                className="p-[14px] hover:text-primary transition-all ease-in-out duration-300"
              >
                {nav.label}
              </Link>
            ))}
          </div>
          <button className="bg-primary text-xl rounded px-4 py-3 hover:shadow-lg hover:shadow-primary hover:text-white transition-all ease-in-out duration-300">
            Download CV
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
