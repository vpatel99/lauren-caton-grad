import React from "react";
import "./App.css";
import ProjectsComponent from "./ProjectsComponent.js";

function Projects() {
  return (
    <div id="Projects" class="page__white">
      <h1 class="page__title">SCHOLARLY PROJECTS</h1>
      <div class="container">
        <ProjectsComponent
          isBlue={true}
          heading="Assn of Maternal and Child Health Programs (AMCHP) and Natl Assn of State and Alcohol Drug Abuse Directors (NASADAD)"
          learnMoreLink="https://infogram.com/state-harm-reduction-strategies-1h7k230lmzdmv2x?live"
          description="State Harm Reduction Strategies to Address Substance Use and Related Outcomes  Among Women of Childbearing Age"
          pubDate="In progress"
        ></ProjectsComponent>
        <ProjectsComponent
          isBlue={false}
          heading="Healthcare Huddle"
          learnMoreLink="https://www.healthcarehuddle.com/concepts/neonatal-abstinence-syndrome"
          description="Neonatal Abstinence Syndrome concepts article for Healthcare Huddle"
          pubDate="April 2021"
        ></ProjectsComponent>
        <ProjectsComponent
          isBlue={true}
          heading="Rewire News Group"
          learnMoreLink="https://rewirenewsgroup.com/multimedia/podcast/the-breach-season-4-montana-e1/"
          description="Investigative journalism research assistant for “We Don’t Heal from It: Investigating Big Horn County’s Criminal Prosecutions of Alcohol in Pregnancy”"
          pubDate="August 2018"
        ></ProjectsComponent>
      </div>
    </div>
  );
}

export default Projects;
