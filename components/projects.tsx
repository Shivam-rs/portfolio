import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Image from "next/image";

export default function Projects() {
  return (
    <section>
      <SectionHeading>my projects</SectionHeading>
      <div className="">
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
type ProjectPros = (typeof projectsData)[number];

function Project({ title, description, tags, imageUrl }: ProjectPros) {
  return (
    <section className="bg-gray-100 max-w-[45rem] border border-black/5 overflow-hidden sm:pr-8 relative sm:h-[20rem] mb-3 sm:mb-8 last:mb-0 group even:pl-8 hover:bg-gray-200 transition">
      <div className="flex flex-col pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] h-full group-even:ml-[18rem]">
        <h3 className="text-2xl font-semibold">{title}</h3>
        <p className="mt-2 leading-relaxed text-gray-700">{description}</p>
        <ul className="flex flex-wrap gap-2 sm:mt-auto">
          {tags.map((tag, index) => (
            <li
              key={index}
              className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <Image
          src={imageUrl}
          alt={"title"}
          quality={95}
          className="absolute top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl group-even:right-[initial] group-even:-left-40 
          group-hover:-translate-x-3
          group-hover:translate-y-3
          group-hover:-rotate-2
          group-hover:scale-[1.04]

          group-even:group-hover:translate-x-3
          group-even:group-hover:translate-y-3
          group-even:group-hover:rotate-2

          transition
          "
        />
      </div>
    </section>
  );
}
