import HeadingSubheading from "./shared/HeadingSubheading";

export default function Contact() {
  return (
    <div className="container mx-auto py-36" id="contact">
      <HeadingSubheading
        heading="Lets Design Together"
        subheading="Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium"
      />
      <form className="pt-16 max-w-4xl mx-auto flex flex-wrap gap-6 items-center justify-center">
        <input
          type="email"
          name="contact"
          id="contact"
          placeholder="Enter Your Email"
          className="bg-secondaryBg text-xl p-6 rounded-xl border max-w-full md:flex-1 placeholder:text-[#797979]"
        />
        <button
          type="submit"
          className="bg-primary text-white text-2xl font-semibold px-9 py-5 rounded-xl hover:shadow-lg hover:shadow-primary transition-all ease-in-out duration-300"
        >
          Conatct Me
        </button>
      </form>
    </div>
  );
}
