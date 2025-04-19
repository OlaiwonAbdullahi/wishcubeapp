// components/Hero.js
import { MdArrowForward } from "react-icons/md";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row justify-between px-6 md:px-20 py-10 md:py-14 bg-[#f9f9ff] min-h-[90vh] items-center gap-3 md:gap-0">
      {/* Left Content */}
      <div className="w-full md:w-1/2 flex flex-col gap-5">
        <h1 className="text-3xl md:text-4xl font-bold text-[#8c52ff] md:text-left text-center leading-tight font-sora">
          A Universe of Greetings, Gifts & Virtual Celebrations 🌌
        </h1>
        <p className="text-gray-700 text-sm md:text-base leading-relaxed max-w-md md:text-left text-center">
          Create personalized greeting cards and websites, send e-gifts, and
          host unforgettable virtual parties with your loved ones—all in one
          place.
        </p>
        <div className="flex gap-4 mt-2 justify-center md:justify-start">
          <button className=" whitespace-nowrap bg-[#8c52ff] text-white px-6 py-2 rounded-full hover:shadow-md transition duration-300">
            Learn More
          </button>
          <div className="bg-transparent border-[#8c52ff] border-2 flex items-center rounded-full">
            <input
              type="email"
              required
              placeholder="Type Email to get started"
              className="bg-transparent rounded-full h-10 p-1 text-gray-700 placeholder:text-gray-500 text-sm placeholder:text-sm"
            />
            <div className="bg-[#8c52ff] text-white h-full rounded-full p-1 w-10 flex items-center justify-center">
              <MdArrowForward className="size-6 bg-[#8c52ff] text-white rounded-full" />
            </div>
          </div>
        </div>
      </div>

      {/* Right Image */}
      <div className="w-full md:w-1/2 mb-8 md:mb-0">
        <Image
          src="/hero.svg"
          alt="Wishverse Hero"
          width={500}
          height={500}
          className="w-full max-w-md mx-auto transform -rotate-2"
        />
      </div>
    </section>
  );
};

export default Hero;
