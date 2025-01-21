"use client";

import { navs } from "@/data/data";
import {
  Facebook,
  Instagram,
  Linkedin,
  Monitor,
  Moon,
  Sun,
  Twitter,
} from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Footer = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <footer className="bg-[#F8F8F8] dark:bg-background">
      <div className="container mx-auto pt-28 flex flex-col items-center justify-center ">
        {/* Logo */}
        <div className="">
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
        </div>
        {/* navs */}
        <div className="mt-16 flex flex-col md:flex-row gap-3">
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
        {/* social icon */}
        <div className="mt-20 mb-16 flex space-x-6">
          <a href="">
            <Facebook className="w-8 h-8" />
          </a>
          <a href="">
            <Twitter className="w-8 h-8" />
          </a>
          <a href="">
            <Instagram className="w-8 h-8" />
          </a>
          <a href="">
            <Linkedin className="w-8 h-8" />
          </a>
        </div>
        <div className="mb-16 flex items-center border rounded-full space-x-1">
          <button
            onClick={() => setTheme("system")}
            className={`w-8 h-8 flex items-center justify-center rounded-full ${
              theme === "system" ? "border" : ""
            }`}
            aria-label="System Theme"
          >
            <Monitor className="w-4 h-4" />
          </button>
          <button
            onClick={() => setTheme("light")}
            className={`w-8 h-8 flex items-center justify-center rounded-full ${
              theme === "light" ? "border" : ""
            }`}
            aria-label="Light Theme"
          >
            <Sun className="w-4 h-4" />
          </button>
          <button
            onClick={() => setTheme("dark")}
            className={`w-8 h-8 flex items-center justify-center rounded-full ${
              theme === "dark" ? "border" : ""
            }`}
            aria-label="Dark Theme"
          >
            <Moon className="w-4 h-4" />
          </button>
        </div>
      </div>
      <div className="w-full bg-[#545454] py-6 text-center text-white dark:bg-[#121212] ">
        <p>
          &copy; {new Date().getFullYear()}{" "}
          <a href=" " className="text-primary hover:underline">
            Mumair
          </a>{" "}
          All rights reserved, Inc.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
