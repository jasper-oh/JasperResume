import React, { useState, useEffect } from "react";
import "./projects.css";
import ProjectCard from "./project-card";
import { ProjectData } from "../../../data/projects";
import Separator from "../../common/separator/index";

function Projects() {
  const [visibleProjects, setVisibleProjects] = useState(4); // Start with showing 3 projects
  const [filteredProjects, setFilteredProjects] = useState(ProjectData);
  const data = ProjectData;

  useEffect(() => {
    const handleFilterClick = (event) => {
      const button = event.target.dataset.filter
        ? event.target
        : event.target.parentNode;
      const type = button.dataset.filter;
      if (!type) return;

      // Update selected button
      const selected = document.querySelector(".category__btn.selected");
      if (selected === button) return;
      selected.classList.remove("selected");
      button.classList.add("selected");

      // Filter projects based on type
      const filtered = type === "*" ? data : data.filter((item) => item.type === type);
      setFilteredProjects(filtered);

      // Reset visible projects to initial value
      setVisibleProjects(4);

      const projects = document.querySelector(".work__projects");
      projects.classList.add("anim-out");

      setTimeout(() => {
        projects.classList.remove("anim-out");
      }, 400);
    };

    const categories = document.querySelector(".work__categories");
    categories.addEventListener("click", handleFilterClick);

    return () => {
      categories.removeEventListener("click", handleFilterClick);
    };
  }, [data]);

  const loadMore = () => {
    setVisibleProjects((prev) => prev + 4); // Load 3 more projects each time
  };

  return (
    <div className="projects">
      <Separator />
      <label className="section-title">Projects</label>
      <div className="work__categories">
        <button className="category__btn selected" data-filter="*">
          All <span className="category__count">9</span>
        </button>
        <button className="category__btn" data-filter="web">
          Web <span className="category__count">5</span>
        </button>
        <button className="category__btn" data-filter="mobile">
          Mobile <span className="category__count">2</span>
        </button>
        <button className="category__btn" data-filter="desktop">
          Desktop <span className="category__count">2</span>
        </button>
      </div>
      <div className="work__projects">
        {filteredProjects.slice(0, visibleProjects).map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
      {visibleProjects < filteredProjects.length && (
        <button className="load-more-btn" onClick={loadMore}>
          See more...
        </button>
      )}
    </div>
  );
}

export default Projects;
