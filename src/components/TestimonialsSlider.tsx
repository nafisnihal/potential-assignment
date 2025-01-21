"use client";

import { motion } from "framer-motion";
import { useState } from "react";
interface Testimonial {
  name: string;
  role: string;
  image: string;
  text: string;
}
interface DragInfo {
  offset: {
    x: number;
  };
}

export default function TestimonialsSlider() {
  const testimonials = [
    {
      name: "John Doe",
      role: "CEO",
      image: "/assets/avatar1.png",
      text: "Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.",
    },
    {
      name: "Jane Smith",
      role: "CTO",
      image: "/assets/avatar2.png",
      text: "Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices. Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan.",
    },
    {
      name: "Alex Johnson",
      role: "Designer",
      image: "/assets/avatar1.png",
      text: "Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.",
    },
  ];
  const [activeIndex, setActiveIndex] = useState(0);

  const handleDragEnd = (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: DragInfo
  ) => {
    const threshold = 100;

    if (info.offset.x > threshold) {
      setActiveIndex(
        (prev) => (prev - 1 + testimonials.length) % testimonials.length
      );
    } else if (info.offset.x < -threshold) {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }
  };

  const getSlideStyle = (index: number) => {
    const position =
      (index - activeIndex + testimonials.length) % testimonials.length;
    let scale = 0.8;
    let opacity = 0.5;
    let zIndex = 0;
    let x = "-100%";

    if (position === 0) {
      scale = 1;
      opacity = 1;
      zIndex = 2;
      x = "0%";
    } else if (position === 1) {
      zIndex = 1;
      x = "100%";
    } else if (position === testimonials.length - 1) {
      zIndex = 1;
      x = "-100%";
    }

    return {
      scale,
      opacity,
      zIndex,
      x,
    };
  };

  return (
    <div className="w-full text-center pt-36">
      <h2 className="text-6xl font-bold">Testimonials</h2>
      <p className="text-xl pt-4 pb-16 max-w-4xl mx-auto">
        Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh
        lectus netus in. Aliquet donec morbi convallis pretium
      </p>

      <div className="relative overflow-hidden h-[800px] md:h-[350px] flex justify-center items-center">
        {testimonials?.map((testimonial: Testimonial, index: number) => (
          <motion.div
            key={index}
            drag="x"
            onDragEnd={handleDragEnd}
            className="absolute w-full max-w-5xl cursor-grab"
            initial={false}
            animate={getSlideStyle(index)}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
            }}
            style={{
              scale: getSlideStyle(index).scale,
              opacity: getSlideStyle(index).opacity,
              zIndex: getSlideStyle(index).zIndex,
              x: getSlideStyle(index).x,
            }}
          >
            <div className="bg-[#F8F8F8] p-6 rounded-lg shadow-md flex flex-col md:flex-row items-center gap-6">
              <img
                src={testimonial?.image}
                alt={testimonial?.name}
                className="w-60 h-60 rounded-full mx-auto object-cover"
              />
              <div className="text-left">
                <span className="text-primary text-2xl font-semibold ">“</span>
                <p className="text-[#424242] text-xl">
                  {testimonial?.text}{" "}
                  <span className="text-primary text-2xl font-medium">”</span>
                </p>
                <p className="mt-4 text-black text-2xl font-bold">
                  {testimonial?.name}
                </p>
                <p className="text-black">{testimonial?.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center space-x-2 mt-10">
        {testimonials?.map((_, index) => (
          <div
            key={index}
            className={`w-14 h-4 rounded-full ${
              index === activeIndex ? "bg-orange-500" : "bg-[#D9D9D9]"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}
