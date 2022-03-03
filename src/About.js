import React from "react";
import "./About.css";
function About() {
  return (
    <div id="About">
      <h1 class="about__title">ABOUT ME</h1>
      <div class="about__content">
        <div class="about__text">
          <p>
            I am a current PhD student in Maternal and Child Health/ Health
            Policy at the University of North Carolina at Chapel Hill’s Gillings
            School of Global Public Health. My interests lie in state-level
            policy levers for expanding treatment access and recovery supports
            for pregnant and parenting persons with substance use disorders.
          </p>
          <p>
            Prior, I worked at the National Association of State and Alcohol
            Drug Abuse Directors, where I oversaw the women’s and youth research
            and technical assistance portfolio. Stanford University’s Center for
            Behavioral Health Sciences and Implementation Research (CBHSIR) on a
            state-wide medications for opioid use disorder (MOUD) expansion
            project. I’ve also conducted research at the University of
            California, San Francisco (UCSF)’s Institute for Health Policy
            Studies and University of California, Berkeley’s Sexual Health and
            Reproductive Equity (SHARE) group where I evaluated adolescent
            sexual health programming and pregnancy acceptability, respectively.
          </p>
          <p>
            I hold a BS in Nutritional Sciences & Toxicology from the University
            of Texas at Austin and a MPH in Maternal, Child, and Adolescent
            Health from the University of California, Berkeley.
          </p>
        </div>
        <div class="about__img2">
          <img alt="headshot" class="about__img" src="lauren.jpg" />
        </div>
      </div>
      <div class="about__buttons">
        <a class="about__link" href="mailto:lcaton@unc.edu">
          <div class="btn btn-contact">Contact</div>
        </a>
        <a
          href="https://drive.google.com/file/d/1e7YU98bRaP-rGkBUkzSFszSMGb8ZSJX4/view"
          target="_blank"
          rel="noreferrer"
          class="about__link"
        >
          <div class="btn btn-cv">CV</div>
        </a>
      </div>
    </div>
  );
}

export default About;
