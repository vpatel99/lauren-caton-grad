import React from "react";
import "./App.css";

function ToolsComponent({ isBlue, heading, learnMoreLink }) {
  return (
    <div className={"box " + (isBlue ? "blue" : "purple")}>
      <h1 class="component__heading">{heading}</h1>
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

export default ToolsComponent;
