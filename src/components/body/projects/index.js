import React from "react";
import "./projects.css";
import ProjectCard from "./project-card";
import { ProjectData } from "../../../data/projects";
import Separator from "../../common/separator/index";
function Projects() {
  const data = ProjectData;

  return (
    <div className="projects">
      <Separator />
      <label className="section-title">Projects</label>
      {/* start */}
      <div className="work__categories">
        <button className="category__btn selected" data-filter="*">
          All <span className="category__count">8</span>
        </button>
        <button className="category__btn" data-filter="web">
          Web <span className="category__count">3</span>
        </button>
        <button className="category__btn" data-filter="mobile">
          Mobile <span className="category__count">2</span>
        </button>
      </div>
      {/* end */}
      <div className="work__projects">
        {data.map((project) => {
          return <ProjectCard project={project} />;
        })}
      </div>
    </div>
  );
}

export default Projects;
