import React from "react";
import "./Article.css";
import "./About.css";

function Article({
  isBlue,
  heading,
  description,
  learnMoreLink,
  hasPresentaion,
}) {
  return (
    <div className={"article__box " + (isBlue ? "blue" : "purple")}>
      <h1 className={"article__heading"}>{heading}</h1>
      <h1 className={"article__description"}>{description}</h1>
      <div class="about__buttons">
        <a
          class="about__link"
          href={learnMoreLink}
          target="_blank"
          rel="noreferrer"
        >
          <div class="btn btn-contact">Learn More</div>
        </a>

        {hasPresentaion ? (
          <a
            href={hasPresentaion}
            target="_blank"
            rel="noreferrer"
            class="about__link"
          >
            <div class="btn btn-cv">Presentation</div>
          </a>
        ) : (
          <span></span>
        )}
      </div>
    </div>
  );
}

export default Article;
