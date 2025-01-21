import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <div
      id="hero"
      className="pt-28 container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 items-center "
    >
      <div className="w-full">
        <p className="text-xl font-semibold">Hi I am</p>
        <p className="text-3xl text-primary font-semibold">Muhammad Umair</p>
        <p className="w-full text-8xl font-bold">
          <span className="text-left">UI & UX </span>
          <span className="block text-right">Designer</span>
        </p>
        <p className="text-xl pt-6 text-justify">
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh
          lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus
          pharetra
        </p>
        <button className="bg-primary text-xl rounded px-4 py-3 mt-6">
          Hire Me
        </button>
      </div>
      <div className="flex flex-col items-center justify-center relative">
        <Image
          src="/assets/hero.png"
          alt="Hero Image"
          width={540}
          height={620}
          layout="responsive"
          loading="lazy"
        />
        {/* social icon */}
        <div className="mt-9 flex space-x-6">
          <a href="">
            <Facebook className="w-8 h-8 hover:scale-110 transition-all ease-in-out duration-300" />
          </a>
          <a href="">
            <Twitter className="w-8 h-8  hover:scale-110 transition-all ease-in-out duration-300" />
          </a>
          <a href="">
            <Instagram className="w-8 h-8  hover:scale-110 transition-all ease-in-out duration-300" />
          </a>
          <a href="">
            <Linkedin className="w-8 h-8  hover:scale-110 transition-all ease-in-out duration-300" />
          </a>
        </div>
        <div className="w-[375px] h-20 bg-[#FD6F0099] absolute top-32" />
      </div>
    </div>
  );
}
