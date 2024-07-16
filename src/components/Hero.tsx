import Image from "next/image";
import React from "react";
import localFont from "next/font/local";
import { motion } from "framer-motion";

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
    <div className="w-full h-screen z-0 mt-16 bg-yellow-400 md:bg-transparent rounded-3xl">
      <motion.div className="w-full h-screen top-0 left-0 fixed  -z-10">
        <Image
          className="object-contain md:object-cover"
          src={"/wavebg.png"}
          fill
          alt="Insta Ribbon"
        />
      </motion.div>
      <div className=" grid grid-cols-1 md:grid-cols-2 w-full gap-11 h-[90%] ">
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 1,
          }}
          className="flex pt-4 md:pt-0 items-center flex-col px-4 md:justify-center w-full h-full"
        >
          <div className="">
            <h1 className="font-semibold text-2xl md:text-4xl text-red-600">
              WE ARE
            </h1>
            <h1
              className={`font-semibold text-4xl md:text-7xl text-red-600 ${bhineka.className}`}
            >
              Insta Post Ph
            </h1>
          </div>
          <p className="text-justify text-black text-sm md:text-xl w-full max-w-xs font-semibold">
            Content marketing and social media marketing agency, helping
            businesses thrive in the digital space, by delivering instant,
            high-end quality content that sells
          </p>
        </motion.div>
        <div className="flex justify-center items-center rounded-xl ">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ type: "spring" }}
            className="w-full h-72 md:w-[90%]  md:h-[90%] relative z-0 rounded-xl"
          >
            <Image
              src={"/logo.png"}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover md:object-cover rounded-xl"
              alt="Intern"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
