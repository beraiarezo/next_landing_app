import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

const routes = [
  {
    title: "მთავარი",
    path: "/",
    route: "/",
  },
  {
    title: "ჩვენ შესახებ",
    path: "/about",
    route: "/about",
  },
  {
    title: "პროდუქცია",
    path: "/products/[slug]",
    route: "/products",
  },
  {
    title: "გალერეა",
    path: "/gallery",
    route: "/gallery",
  },
];

interface NavlinkProps {
  title: string;
  path: string;
  isActive: boolean;
}

const Navlink = ({ title, path, isActive }: NavlinkProps) => {
  return (
    <li>
      <Link
        href={path}
        className={` font-nino block py-2 px-3  text-xl rounded  ${
          isActive ? "bg-c-yellow text-c-purple	" : "text-white"
        } hover:bg-c-yellow`}
      >
        {title}
      </Link>
    </li>
  );
};

export default function Navbar() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed w-full h-20 top-0 z-10 flex-1">
      <nav className="border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            {/* browser console logs error here */}
            {/* <Image src={LogoSvg} alt="ბეტონის ღობე" className=" w-12" /> */}
          </Link>
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className={`${
              isOpen ? "bg-gray-100" : ""
            } inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-c-yellow rounded-lg md:hidden`}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className={`${!isOpen ? "hidden" : ""}  w-full md:block md:w-auto`}
            id="navbar-default"
          >
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 bg-slate-400	sm:bg-transparent md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 ">
              {routes.map((route, index) => (
                <Navlink
                  title={route.title}
                  path={route.route}
                  key={index}
                  isActive={
                    router.pathname === route.path ||
                    router.pathname === route.route
                  }
                />
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
