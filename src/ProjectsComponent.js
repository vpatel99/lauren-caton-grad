import React from "react";
import "./App.css";
import "./ProjectsComponent.css";

function ProjectsComponent({
  isBlue,
  heading,
  learnMoreLink,
  pubDate,
  description,
}) {
  return (
    <div className={"projects__box " + (isBlue ? "blue" : "purple")}>
      <h1 class="projects__pubdate">{pubDate}</h1>
      <h1 class="component__heading">{heading}</h1>
      <h1 class="component__description">{description}</h1>
      <div class="component__buttons">
        <a
          class="component__link"
          href={learnMoreLink}
          target="_blank"
          rel="noreferrer"
        >
          <div class={"btn " + (isBlue ? "btn-blue" : "btn-purple")}>Visit</div>
        </a>
      </div>
    </div>
  );
}

export default ProjectsComponent;
