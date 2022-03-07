import React from "react";
import "./App.css";
import "./MediaComponent.css";

function MediaComponent({ isBlue, heading, description, learnMoreLink }) {
  return (
    <div className={"media " + (isBlue ? "blue" : "purple")}>
      <img src="Paper.svg" alt="media icon" class="icon"></img>
      <div class="content">
        <h1 class="media__heading">{heading}</h1>
        <h1 class="media__description">{description}</h1>
        <div>
          <a
            class="component__link"
            href={learnMoreLink}
            target="_blank"
            rel="noreferrer"
            style={{ margin: "0" }}
          >
            <div class={"btn " + (isBlue ? "btn-blue" : "btn-purple")}>
              Visit
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default MediaComponent;
