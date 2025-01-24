import Image from "next/image";

export default function AboutMe() {
  const skills = [
    { name: "UX", percentage: 90 },
    { name: "Website Design", percentage: 85 },
    { name: "App Design", percentage: 92 },
    { name: "Graphic Design", percentage: 90 },
  ];
  return (
    <div
      className="pt-[70px] container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 gap-y-4 items-center"
      id="about"
    >
      <div className="flex flex-col items-center justify-center relative order-2 lg:order-1">
        <div className="w-full h-[400px] lg:h-[620px]">
          <Image
            src="/assets/about.png"
            alt="hero hover image"
            fill
            className="object-contain"
            sizes="(max-width: 768px) 400px, 617px"
            priority
            quality={100}
          />
        </div>
        <div className="w-full md:w-[375px] h-20 bg-[#FD6F0099] absolute top-20" />
      </div>
      <div className="w-full order-1 lg:order-2">
        <p className="text-6xl font-semibold">About Me</p>
        <p className="text-xl pt-6 text-justify">
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh
          lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus
          pharetra
        </p>
        <div className="space-y-6 w-full mt-6">
          {skills.map((skill, index) => (
            <div key={index} className="w-full group">
              <p className="text-lg font-semibold mb-2">{skill?.name}</p>
              <div className="relative w-full h-2 bg-gray-200 rounded-full">
                <div
                  className="absolute top-0 left-0 h-2 rounded-full bg-primary"
                  style={{ width: `${skill?.percentage + 1}%` }}
                ></div>
                <div
                  className="absolute top-1/2 transform -translate-y-1/2 w-5 h-5 bg-white border-2 border-primary rounded-full group-hover:scale-150 transition-all ease-in-out duration-300"
                  style={{ left: `${skill?.percentage}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
