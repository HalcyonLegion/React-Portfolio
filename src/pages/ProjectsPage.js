import React from "react";
import projectsData from "../data/projects.json";
import Project from "../components/Project.js";

function ProjectsPage() {
  return (
    <section className="container">
      <div className="row">
        {projectsData.map((project) => (
          <Project key={project.id} data={project} />
        ))}
      </div>
    </section>
  );
}

export default ProjectsPage;