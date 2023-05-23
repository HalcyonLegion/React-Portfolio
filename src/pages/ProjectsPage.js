import React from "react";
import projectsData from "../data/projects.json";
import Project from "./Project";

function ProjectsPage() {
  return (
    <div>
      {projectsData.map((project) => (
        <Project key={project.id} data={project} />
      ))}
    </div>
  );
}

export default ProjectsPage;