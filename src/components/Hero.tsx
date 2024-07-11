import Image from "next/image";
import React from "react";
import localFont from "next/font/local";

const bhineka = localFont({
  src: [
    {
      path: "../../public/fonts/Bhineka.ttf",
      weight: "700",
    },
  ],
});
const Hero = () => {
  return (
    <div className="w-full h-screen z-0 mt-16">
      <div className="w-full h-screen top-0 left-0 fixed bg-yellow-400 -z-10">
        <Image
          className="object-contain md:object-cover"
          src={"/instaribbon.png"}
          fill
          alt="Insta Ribbon"
        />
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 w-full gap-11 h-[90%]">
        <div className="flex pt-4 md:pt-0 items-center flex-col px-4 md:justify-center w-full h-full">
          <div className="">
            <h1 className="font-semibold text-2xl md:text-4xl text-white">
              WE ARE
            </h1>
            <h1
              className={`font-semibold text-4xl md:text-7xl text-white ${bhineka.className}`}
            >
              INSTA POST PH
            </h1>
          </div>
          <p className="text-justify text-sm md:text-xl w-full max-w-xs font-semibold">
            Content marketing and social media marketing agency, helping
            businesses thrive in the digital space, by delivering instant,
            high-end quality content that sells
          </p>
        </div>
        <div className="flex justify-center items-center">
          <div className="w-full h-72 md:w-[90%] z-0 md:h-[90%] relative">
            <Image
              src={"/intern.png"}
              fill
              className="object-contain md:object-contain"
              alt="Intern"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
