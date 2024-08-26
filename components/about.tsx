"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      className="max-w-[45rem] text-center leading-8"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3">
        My journey in{" "}
        <span className="font-semibold">software engineering</span> began during
        my undergraduate studies, where I served as the General Secretary of our
        Students' Chapter of the Technical Association. In this role, I started
        developing{" "}
        <span className="font-semibold">full-stack web applications</span>
        as part of workshops and seminars.
      </p>
      <p className="mb-3">
        After graduating in 2019, I joined LTIMindtree in Mumbai, India, where I
        spent over four years advancing from a{" "}
        <span className="font-semibold">
          Graduate Engineering Trainee to a Senior Software Engineer
        </span>
        . During my tenure, I contributed to exciting projects with{" "}
        <span className="italic">
          tech stack of Java, Spring Boot, JavaScript, Angular, React, and
          MongoDB
        </span>
        . Currently, as I pursue a{" "}
        <span className="font-semibold">
          master’s degree in Computer Science
        </span>{" "}
        at UCF, I am also working as a Graduate Research Assistant, where I
        apply my industry experience to my studies and research.{" "}
        <span className="underline">
          I am actively looking for full-time software developer positions
        </span>
        .
      </p>
      <p>
        When I'm not immersed in code or academics, you'll find me planning my
        next solo travel adventure, watching action movies, or cheering for my
        favorite cricket team.
      </p>
    </motion.section>
  );
}
