"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { AiFillBug } from "react-icons/ai";
import classnames from "classnames";

const Navbar = () => {
  const currentPath = usePathname();

  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues" },
  ];

  return (
    <nav className="bg-purple-100 shadow-md">
      <div className="container mx-auto flex justify-center items-center px-6 py-4">
        {/* Logo Section */}
        <Link href="/" className="flex items-center text-purple-700 text-2xl font-bold">
          <AiFillBug className="mr-2 text-3xl" />
          <span>Bug Tracker</span>
        </Link>

        {/* Navigation Links */}
        <ul className="flex space-x-6 ml-12">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={classnames(
                  "px-4 py-2 rounded-md text-lg font-medium transition-colors duration-200",
                  {
                    "bg-purple-600 text-white": link.href === currentPath, // Active link style
                    "text-purple-700 hover:text-white hover:bg-purple-600": link.href !== currentPath, // Inactive hover style
                  }
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
