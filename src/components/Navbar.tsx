import Link from "next/link";
import React from "react";
import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import localFont from "next/font/local";
import { Raleway } from "next/font/google";
import Image from "next/image";

const raleway = Raleway({ subsets: ["latin"] });

const bhineka = localFont({
  src: [
    {
      path: "../../public/fonts/Bhineka.ttf",
      weight: "700",
    },
  ],
});

const Navbar = () => {
  const [status, setStatus] = useState(false);

  const statusHandler = () => {
    setStatus(!status);
  };

  return (
    <nav className="w-full fixed top-0  mt-2 flex items-center z-30">
      <div className="w-full max-w-4xl flex items-center  rounded-full mx-auto bg-yellow-400  justify-between px-4 py-2">
        <div className="relative w-12 h-12 md:w-16 md:h-16 scale-150 md:scale-150">
          {/* Logo Here */}
          <Image src={"/logowhite.png"} alt="White Logo" fill />
        </div>
        <div className="hidden md:flex space-x-2 text-xl text-white">
          <Link href={"/"}>HOME</Link>
          <Link href={"about"}>ABOUT</Link>
          <Link href={"/"}>WORKS</Link>
          <Link href={"/"}>CONTACT</Link>
        </div>
        {/* Mobile Device Below */}
        <div className="visible md:hidden ">
          <div onClick={statusHandler}>
            <IoMenu size={45} />
          </div>
          <div
            className={
              status
                ? "h-screen fixed top-0 duration-300 items-center py-8 transition-all ease-in right-0 bg-white flex flex-col justify-between z-20"
                : "h-screen fixed top-0 duration-300 items-center py-8 transition-all ease-out right-[-250px] bg-white flex flex-col justify-between z-20"
            }
          >
            <div
              className={`flex flex-col pl-4 pr-12 gap-2  font-${raleway.className} font-semibold text-xl text-red-600`}
            >
              <Link onClick={statusHandler} href={"/"}>
                HOME
              </Link>
              <Link onClick={statusHandler} href={"/"}>
                ABOUT
              </Link>
              <Link onClick={statusHandler} href={"/"}>
                WORKS
              </Link>
              <Link onClick={statusHandler} href={"/"}>
                CONTACT
              </Link>
            </div>
            <div className="text-red-600" onClick={statusHandler}>
              <IoMdClose size={45} />
            </div>
          </div>
          <div
            onClick={statusHandler}
            className={
              status
                ? "w-full h-screen visible bg-yellow-400 opacity-90 fixed top-0 left-0 z-10"
                : "w-full h-screen hidden bg-yellow-400 opacity-90 fixed top-0 left-0 z-10"
            }
          ></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
