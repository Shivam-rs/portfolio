"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrow90DegRight, BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

export default function Intro() {
  return (
    <section className="mb-28 max-w-[50rem] text-center sm:mb-0 ">
      <div className=" flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src="/Singh_Shivam.jpg"
              alt="Shivam portrait"
              width="192"
              height="192"
              priority={true}
              className=" h-24 w-24 rounded-full border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>

          <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>

      <motion.p
        className="mb-10 mt-4 px-4 text-3xl !leading-[1.5]"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Howdy, <span className="font-bold">I'm Shivam.</span> A professional{" "}
        <span className="font-bold">full-stack developer</span> with{" "}
        <span className="font-bold">4 years</span> of experience, specializing
        in{" "}
        <span className="italic">
          Java, Spring, React, and cloud technologies.
        </span>
      </motion.p>

      <motion.div
        className="flex flex-col sm:flex-row gap-3 justify-center px-4 text-lg font font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-105 hover:bg-gray-950 active:scale-105 transition cursor-pointer"
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <a
          href="/Shivam_Resume.pdf"
          target="_blank"
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-105 active:scale-105 transition border border-black/10"
        >
          Download CV{" "}
          <HiDownload className="opacity-70 group-hover:translate-y-1 transition" />
        </a>

        <a
          href="https://www.linkedin.com/in/shivamrs/"
          target="_blank"
          className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:text-gray-950 active:scale-110 transition border border-black/10"
        >
          <BsLinkedin />
        </a>

        <a
          href="https://github.com/Shivam-rs"
          target="_blank"
          className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full text-[1.35rem] outline-none focus:scale-110 hover:scale-110 hover:text-gray-950 active:scale-110 transition border border-black/10"
        >
          <FaGithubSquare />
        </a>

        <a
          href="https://leetcode.com/u/shivam_rs/"
          target="_blank"
          className="bg-white p-4 flex items-center gap-2 rounded-full text-[1.25rem] outline-none focus:scale-110 hover:scale-110 hover:text-gray-950 active:scale-110 transition border border-black/10"
        >
          <SiLeetcode />
        </a>
      </motion.div>
    </section>
  );
}
