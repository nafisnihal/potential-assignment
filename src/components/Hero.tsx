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
        <p className="w-full text-5xl md:text-8xl font-bold">
          <span className="text-left">UI & UX </span>
          <span className="block text-right">Designer</span>
        </p>
        <p className="text-xl pt-6 text-justify">
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh
          lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus
          pharetra
        </p>
        <button className="bg-primary text-white text-xl rounded px-4 py-3 mt-6 hover:shadow-lg hover:shadow-primary transition-all ease-in-out duration-300">
          Hire Me
        </button>
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="w-full h-[400px] lg:h-[620px] group relative cursor-pointer">
          <Image
            src="/assets/hero.png"
            alt="hero image"
            fill
            className="object-contain opacity-100 group-hover:opacity-0 hover:delay-100 transition-all ease-in-out duration-300"
            sizes="(max-width: 768px) 400px, 617px"
            priority
            quality={100}
          />
          <Image
            src="/assets/about.png"
            alt="hero hover image"
            fill
            className="object-contain opacity-0 group-hover:opacity-100 transition-all ease-in-out duration-300 hover:delay-100 absolute top-0"
            sizes="(max-width: 768px) 400px, 617px"
            priority
            quality={100}
          />
          <div className="w-full md:w-[375px] h-20 bg-[#FD6F0099] absolute top-20 md:left-[25%]" />
        </div>
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
      </div>
    </div>
  );
}
