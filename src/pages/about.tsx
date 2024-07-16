import Image from "next/image";
import React from "react";

const about = () => {
  return (
    <div className="w-full h-[100vh]">
      <div className="w-full h-full relative">
        <Image
          alt="redyellow"
          src={"/redyellow.png"}
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default about;
