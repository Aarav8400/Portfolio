"use client";
import React from "react";
import { motion } from "framer-motion";
import Lottie from "react-lottie";
import animationData from "../../public/Animation - 1724948186923";
const Why = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <section
      id="why"
      className="w-full flex flex-col items-center justify-center relative mt-24"
    >
      <div className="flex ">
        <motion.div
          className="md:w-[40%] md:pl-16 mt-16"
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="font-extrabold text-[40px] text-[#242d4b] mb-5 ">
            Client's Always Get Exceptional Works From me{" "}
          </h1>
          <p className="font-normal mb-10 text-[#63636b]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            voluptas totam perspiciatis repellat esse ducimus, quibusdam aut
            quae alias iure.
          </p>
        </motion.div>
        <motion.div
          className="md:w-[60%] flex items-center justify-center"
          initial={{ opacity: 0, x: 200, rotateX: 0 }}
          whileInView={{ opacity: 1, x: 0, rotateY: 360 }}
          transition={{ duration: 1.5 }}
        >
          <Lottie
            options={defaultOptions}
            height={400}
            width={400}
            style={{ borderRadius: "50%" }}
          />
        </motion.div>
      </div>

      <div className="mt-5 flex flex-col gap-2 rounded-2xl px-20 py-10 bg-gradient-to-r from-orange-100 to-orange-200 w-full  ">
        <p>1.Top Quality Works</p>
        <p>2.Commitments</p>
        <p>3.24 hours Active</p>
      </div>
    </section>
  );
};

export default Why;
