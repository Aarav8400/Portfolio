import Image from "next/image";
import React from "react";
import { projects } from "@/constants";
import { motion } from "framer-motion";

const Project_Card = ({ image }) => {
  return (
    <motion.div className="rounded-xl hover:shadow-2xl shadow-xl" 
    initial={{ opacity: 0, scale: 0.5 }}
    whileHover={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}>
      <Image src={image} width={300} height={300} alt={"project"} className="rounded-xl"/>
    </motion.div>
  );
};

export default Project_Card;
