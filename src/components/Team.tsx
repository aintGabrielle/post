import Image from "next/image";
import React from "react";
import localFont from "next/font/local";
import { Raleway } from "next/font/google";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const raleway = Raleway({
  subsets: ["latin"],
});

const bhineka = localFont({
  src: "../../public/fonts/Bhineka.ttf",
});

const doings = [
  {
    title: "PHOTOGRAPHY",
    description:
      "Insta Post delivers high-quality photography that showcases your brand or products in the best light possible, enhancing your overall image and professionalism.",
  },
  {
    title: "VIDEOGRAPHY",
    description:
      "Harness the potential of video marketing to amplify your brand's reach and engagement. With our expertise, your message will resonate with your audience, leaving a lasting impression and driving action.",
  },
  {
    title: "SOCIAL MEDIA MANAGEMENT",
    description:
      "We curate tailored social media strategies for each month of your business, crafted a month in advance, ensuring timely and relevant content. What’s our advantage in social media management: We’ll not only boost your online presence but also foster meaningful connections with your followers, driving growth and engagement.",
  },
];
const Team = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0.5, 1], ["0%", "-95%"]);

  return (
    <main className="bg-white py-6">
      <h1
        className={`text-center tracking-widest text-3xl sm:text-4xl lg:text-6xl ${bhineka.className}`}
      >
        WHAT CAN WE DO?
      </h1>
      <motion.div ref={targetRef} style={{ x }} className="w-full p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {doings.map((item, index) => (
            <div key={index} className="p-4 bg-red-600 rounded-lg  ">
              <h1
                className={`text-yellow-400 font-bold ${raleway.className} text-2xl`}
              >
                {item.title}
              </h1>
              <p className="text-gray-300 ">{item.description}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </main>
  );
};

export default Team;
