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

const Team = () => {
  const people = [
    {
      href: "/villar.JPG",
      name: "Ma. Kristina Villar",
      position: "Creative Head",
      motto: "Time is GOLDILOCKS",
    },
    {
      href: "/villar.JPG",
      name: "Ma. Kristina Villar",
      position: "Creative Head",
      motto: "Time is GOLDILOCKS",
    },
    {
      href: "/villar.JPG",
      name: "Ma. Kristina Villar",
      position: "Creative Head",
      motto: "Time is GOLDILOCKS",
    },
    {
      href: "/villar.JPG",
      name: "Ma. Kristina Villar",
      position: "Creative Head",
      motto: "Time is GOLDILOCKS",
    },
    {
      href: "/villar.JPG",
      name: "Ma. Kristina Villar",
      position: "Creative Head",
      motto: "Time is GOLDILOCKS",
    },
  ];

  return (
    <div className="w-full flex flex-col  bg-white">
      <div className="w-full py-8">
        <h1
          className={`${bhineka.className} text-center text-3xl sm:text-4xl md:text-5xl tracking-widest font-semibold`}
        >
          MEET THE TEAM
        </h1>
      </div>
      <div className="w-full h-full grid grid-cols-1 md:grid-cols-2">
        <div className="w-full h-full relative">
          <Image
            src={"/logo.png"}
            width={500}
            height={500}
            style={{ objectFit: "cover" }}
            alt="Yellow"
          />
        </div>
        <div className="grid grid-cols-1 space-y-4 p-3 ">
          {people.map((item, index) => (
            <div
              key={index}
              className="w-[90%] mx-auto bg-black text-white relative p-4 h-full flex"
            >
              <div className="w-fit h-full items-center relative bg-slate-500">
                <Image
                  src={"/villar.JPG"}
                  width={120}
                  height={120}
                  style={{ objectFit: "contain" }}
                  alt="Profiles"
                />
              </div>
              <div>
                <h1>{item.name}</h1>
                <h4>{item.position}</h4>
                <p>{item.motto}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
