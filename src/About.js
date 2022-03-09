import React from "react";
import "./About.css";
function About() {
  return (
    <div id="About">
      <h1 class="about__title">ABOUT ME</h1>
      <div class="about__content">
        <div class="about__text">
          <p>
            {"I’m currently a "}
            <a
              href="https://sph.unc.edu/mch/center-of-excellence/"
              target="_blank"
              rel="noreferrer"
            >
              {"Center of Excellence Fellow"}
            </a>
            {` in the Department of Maternal and Child Health, where I work on the
            Improving Community Outcomes for Maternal and Child Health (ICO4MCH)
            initiative, which aims to expand evidence-based practice adoption to
            improve county-level birth outcomes and reduce maternal mortality. I
            additionally serve on the evaluation team for the department’s
            Maternal Health Learning & Innovation Center (MHLIC).`}
          </p>
          <p>
            {"Prior, I worked at the "}
            <a href="https://nasadad.org/" target="_blank" rel="noreferrer">
              {"National Association of State and Alcohol Drug Abuse Directors"}
            </a>
            {`, where I oversaw the women’s and youth research and technical
            assistance portfolio. Stanford University’s `}
            <a
              href="https://med.stanford.edu/cbhsir.html"
              target="_blank"
              rel="noreferrer"
            >
              {
                "Center for Behavioral Health Sciences and Implementation Research (CBHSIR)"
              }
            </a>
            {` on a state-wide medications for opioid use disorder (MOUD) expansion project. I’ve also conducted research at the University of California, San Francisco (UCSF)’s `}
            <a
              href="https://healthpolicy.ucsf.edu/philip-r-lee-institute-health-policy-studies"
              target="_blank"
              rel="noreferrer"
            >
              {"Institute for Health Policy Studies"}
            </a>
            {" and University of California, Berkeley’s "}
            <a
              href="https://www.share.berkeley.edu/"
              target="_blank"
              rel="noreferrer"
            >
              {"Sexual Health and Reproductive Equity (SHARE)"}
            </a>
            {
              " group where I evaluated adolescent sexual health programming and pregnancy acceptability, respectively."
            }
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
