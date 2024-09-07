import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import React from "react";

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
