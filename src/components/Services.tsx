import { services } from "../data/data";
import HeadingSubheading from "./shared/HeadingSubheading";

interface ServiceType {
  title: string;
  description: string;
  icon: string;
}

export default function Services() {
  return (
    <div className="container mx-auto pt-36" id="services">
      <HeadingSubheading
        heading="Our Services"
        subheading="Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium"
      />
      <div className="pt-16 flex flex-wrap gap-8 justify-center items-center">
        {services.map((service: ServiceType, index: number) => (
          <div
            key={index}
            className="bg-secondaryBg w-[330px] px-[18px] pt-[50px] pb-10 rounded-xl cursor-pointer hover:shadow-md transition-all duration-300 ease-in-out dark:hover:shadow-secondaryBg"
          >
            <img
              src={service.icon}
              alt={service.title}
              className="max-h-[72px]"
            />
            <h3 className="text-3xl text-black font-bold pt-4">
              {service.title}
            </h3>
            <p className="text-lg text-black pt-4">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
