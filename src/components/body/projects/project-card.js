import React from "react";
import "./project-card.css";
function ProjectCard({ project }) {
  return (
    <div className="project-card" data-type={project.type}>
      <div className="project-info">
        <label className="project-title">{project.title}</label>
        <p>{project.about}</p>
        <div className="project-links">
          {project.demo && (
            <a className="project-link" href={project.demo}>
              <div className="link-button">
                <i class="fi-rr-play"></i>
                Youtube
              </div>
            </a>
          )}
          {project.github && (
            <a className="project-link" href={project.github}>
              <div className="link-button">
                <i class="devicon-github-original colored"></i> Github
              </div>
            </a>
          )}
          {project.pdf && (
            <a className="project-link" href={project.pdf}>
              <div className="link-button">
                <i class="fi-rr-document"></i> PDF
              </div>
            </a>
          )}
        </div>

        <div className="projectAwesome">
          <div className="project-tags">
            {project.tags.map((tag) => {
              return <label className="tag">{tag}</label>;
            })}
          </div>
          <img src={project.image} className="project-photo" />
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
