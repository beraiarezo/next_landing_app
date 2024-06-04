import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import LogoSvg from "../../public/icons/logo.svg";

const navlist = [
  {
    title: "მთავარი",
    path: "/",
  },
  {
    title: "ჩვენ შესახებ",
    path: "/about",
  },
  {
    title: "პროდუქცია",
    path: "/products",
  },
  {
    title: "გალერეა",
    path: "/gallery",
  },
];

interface NavlinkProps {
  title: string;
  path: string;
}

const Navlink = ({ title, path }: NavlinkProps) => {
  console.log("---");
  return (
    <li>
      <Link
        href={path}
        className=" hover:bg-c-yellow font-nino block bg-transparent py-2 px-3 text-white bg-c-yellow text-xl rounded md:bg-transparent "
        // aria-current="page"
      >
        {title}
      </Link>
    </li>
  );
};

const CustomImage = ({ src, alt, fetchPriority, ...props }: any) => {
  return <img src={src} alt={alt} fetchpriority={fetchPriority} {...props} />;
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen, "isOpen");
  return (
    <header className="fixed w-full h-20 top-0 z-10 flex-1">
      <nav className="border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            {/* browser console logs error here */}
            <Image src={LogoSvg} alt="ბეტონის ღობე" className=" w-12" />
          </Link>
          <button
            onClick={() => setIsOpen(!isOpen)}
            // data-collapse-toggle="navbar-default"
            type="button"
            className={`${
              isOpen ? "bg-gray-100" : ""
            } inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-c-yellow rounded-lg md:hidden`}
            // aria-controls="navbar-default"
            // aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              // aria-hidden="true"
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
              {navlist.map((nav, index) => (
                <Navlink title={nav.title} path={nav.path} key={index} />
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
