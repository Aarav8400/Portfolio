"use client";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
const Navbar = () => {
  return (
    <motion.div
      className="bg-white p-7 m-5 rounded-lg sticky"
      initial={{ opacity: 0, y: -200 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5 }}
    >
      <nav className="flex justify-between items-center ">
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
        >
          <h1 className="font-extrabold text-[25px]">mrVikas</h1>
        </motion.div>
        <div>
          <ul className="flex gap-5 items-center">
            <Link href={"#"}>Home</Link>
            <Link href={"#"}>About Us</Link>
            <Link href={"#"}>Work</Link>
            <Link
              className="bg-[#e56712] px-7 py-3 rounded-lg text-white font-medium ml-24 "
              href={"#"}
            >
              Contact
            </Link>
          </ul>
        </div>
      </nav>
    </motion.div>
  );
};

export default Navbar;
