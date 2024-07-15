import React from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

const Benchmark = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0.5, 1], ["1%", "-100%"]);
  const boxes = [
    {
      title: "Box 1",
    },
    {
      title: "Box 2",
    },
    {
      title: "Box 3",
    },
  ];
  return (
    <section className="w-full h-[300vh] bg-black relative overflow-x-hidden ">
      <motion.div className="w-full top-0 h-[300px] bg-purple-500 sticky">
        <motion.div
          ref={targetRef}
          style={{ x }}
          className="flex w-full mx-auto gap-3  "
        >
          {boxes.map((item, index) => (
            <div className="bg-white w-32 h-32" key={index}>
              <h1>{item.title}</h1>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Benchmark;
