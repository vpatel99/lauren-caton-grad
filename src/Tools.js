import React from "react";
import "./App.css";
import ToolsComponent from "./ToolsComponent.js";

function Tools() {
  return (
    <div id="Tools" class="page__white">
      <h1 class="page__title">TOOLS AND TOOLKITS</h1>
      <div class="container">
        <ToolsComponent
          isBlue={true}
          heading="Providing health care providers with stigma education/resources"
          learnMoreLink="https://nastoolkit.org/explore-the-toolkit/best-practice/37"
        ></ToolsComponent>
        <ToolsComponent
          isBlue={false}
          heading="Primary Care Practice Adaptations for Patients with Opioid Use Disorder during COVID-19: A Survey"
          learnMoreLink="https://med.stanford.edu/cbhsir/di-tools-and-resources.html"
        ></ToolsComponent>
        <ToolsComponent
          isBlue={true}
          heading="Integrating Medications for Addiction Treatment in Primary Care – Opioid Use Disorder Version 1.3: An index of capability at the organizational/clinic level"
          learnMoreLink="https://med.stanford.edu/cbhsir/di-tools-and-resources.html"
        ></ToolsComponent>
        <ToolsComponent
          isBlue={false}
          heading=" The Integrating Medications for Addiction Treatment (IMAT) Index: A measure of capability at the organizational level"
          learnMoreLink="https://doi.org/10.1016/j.jsat.2021.108395"
        ></ToolsComponent>
      </div>
    </div>
  );
}

export default Tools;
