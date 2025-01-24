"use client";

import { navs } from "@/data/data";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

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
              priority
            />
            <Image
              className="hidden dark:block"
              src="/assets/logo-dark.png"
              alt="Logo"
              width={280}
              height={70}
              priority
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-6">
          <div className="flex space-x-3">
            {navs.map((nav, index) => (
              <Link
                key={index}
                href={nav.href}
                onClick={() => handleScroll(nav.href)}
                className="p-[14px] hover:text-primary transition-all ease-in-out duration-300"
              >
                {nav.label}
              </Link>
            ))}
          </div>
          <button className="bg-primary text-white text-xl rounded px-4 py-3 hover:shadow-lg hover:shadow-primary transition-all ease-in-out duration-300">
            Download CV
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <div className="lg:hidden flex items-center">
          <button onClick={toggleSidebar} aria-label="Toggle Menu">
            {isSidebarOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-screen w-3/4 md:w-1/2 bg-background z-50 transform transition-transform ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6">
          {/* Close Button */}
          <button onClick={toggleSidebar} className="absolute top-8 right-4">
            <X size={28} />
          </button>

          {/* Navigation Links */}
          <nav className="flex flex-col space-y-4 mt-24">
            {navs.map((nav, index) => (
              <Link
                key={index}
                href={nav.href}
                onClick={() => {
                  setIsSidebarOpen(false);
                  handleScroll(nav.href);
                }}
                className="text-lg font-medium hover:text-primary transition-all"
              >
                {nav.label}
              </Link>
            ))}
          </nav>

          {/* CV Button */}
          <div className="mt-6">
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="bg-primary text-white text-lg rounded px-6 py-3 w-full hover:shadow-lg hover:shadow-primary transition-all ease-in-out duration-300"
            >
              Download CV
            </button>
          </div>
        </div>
      </div>

      {/* Overlay for Sidebar */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleSidebar}
        />
      )}
    </header>
  );
};

export default Header;
