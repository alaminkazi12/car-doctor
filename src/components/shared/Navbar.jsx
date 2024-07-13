import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CiSearch } from "react-icons/ci";
import { IoBagHandleOutline } from "react-icons/io5";

const navItems = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Service",
    path: "/service",
  },
  {
    title: "Blog",
    path: "/blog",
  },
  {
    title: "Contact",
    path: "/contact",
  },
];

const Navbar = () => {
  return (
    <div className=" bg-base-100">
      <div className="container mx-auto md:pt-2">
        <div className="navbar  text-black/90">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <div
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                {navItems.map((item) => (
                  <Link
                    className="font-semibold hover:text-primary"
                    key={item.path}
                    href={item.path}
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>
            <Link href="/">
              <Image
                priority
                src="/assets/logo.svg"
                height={60}
                width={100}
                alt="car doctor logo"
              />
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <div className=" flex items-center gap-6">
              {navItems.map((item) => (
                <Link
                  className="font-semibold  text-xl hover:text-primary"
                  key={item.path}
                  href={item.path}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
          <div className="navbar-end">
            <div className="flex items-center text-2xl text-white gap-3 pr-4">
              <IoBagHandleOutline />
              <CiSearch />
            </div>
            <a className="btn btn-outline px-6 py-4 text-primary border-2 ">
              Appointment
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
