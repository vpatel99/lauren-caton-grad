import React from "react";
import "./Research.css";
import "./App.css";
import Article from "./Article.js";

function Research() {
  return (
    <div id="Research">
      <h1 class="research__title">RESEARCH</h1>
      <div class="research__heading">Implementation Science</div>
      <div class="container">
        <Article
          isBlue={true}
          heading="Opening the “black box”: Four common implementation strategies for expanding the use of medications for opioid use disorder in primary care"
          description="Despite the persistent increase in overdose deaths, access to medications for opioid use disorders remains limited. Recent federal funding aimed at increasing access prompts a need to understand if implementation strategies improve access."
          learnMoreLink="https://doi.org/10.1177/26334895211005809"
          hasPresentaion="https://drive.google.com/file/d/1edILv6HFkVihGKrIcr2mgESsi6Ge8eoY/view"
        ></Article>
        <Article
          isBlue={false}
          heading="Opening the “black box”: Four common implementation strategies for expanding the use of medications for opioid use disorder in primary care"
          description="Despite the persistent increase in overdose deaths, access to medications for opioid use disorders remains limited. Recent federal funding aimed at increasing access prompts a need to understand if implementation strategies improve access."
          learnMoreLink="https://doi.org/10.1177/26334895211005809"
        ></Article>
        <Article
          isBlue={true}
          heading="Opening the “black box”: Four common implementation strategies for expanding the use of medications for opioid use disorder in primary care"
          description="Despite the persistent increase in overdose deaths, access to medications for opioid use disorders remains limited. Recent federal funding aimed at increasing access prompts a need to understand if implementation strategies improve access."
          learnMoreLink="https://doi.org/10.1177/26334895211005809"
        ></Article>
      </div>
      <div class="research__heading">Substance Use Disorder Policy</div>
      <div class="container">
        <Article
          isBlue={true}
          heading="Opening the “black box”: Four common implementation strategies for expanding the use of medications for opioid use disorder in primary care"
          description="Despite the persistent increase in overdose deaths, access to medications for opioid use disorders remains limited. Recent federal funding aimed at increasing access prompts a need to understand if implementation strategies improve access."
          learnMoreLink="https://doi.org/10.1177/26334895211005809"
          hasPresentaion="https://drive.google.com/file/d/1edILv6HFkVihGKrIcr2mgESsi6Ge8eoY/view"
        ></Article>
        <Article
          isBlue={false}
          heading="Opening the “black box”: Four common implementation strategies for expanding the use of medications for opioid use disorder in primary care"
          description="Despite the persistent increase in overdose deaths, access to medications for opioid use disorders remains limited. Recent federal funding aimed at increasing access prompts a need to understand if implementation strategies improve access."
          learnMoreLink="https://doi.org/10.1177/26334895211005809"
        ></Article>
        <Article
          isBlue={true}
          heading="Opening the “black box”: Four common implementation strategies for expanding the use of medications for opioid use disorder in primary care"
          description="Despite the persistent increase in overdose deaths, access to medications for opioid use disorders remains limited. Recent federal funding aimed at increasing access prompts a need to understand if implementation strategies improve access."
          learnMoreLink="https://doi.org/10.1177/26334895211005809"
        ></Article>
      </div>
      <div class="research__heading">Maternal and Child Health</div>
      <div class="container">
        <Article
          isBlue={true}
          heading="Opening the “black box”: Four common implementation strategies for expanding the use of medications for opioid use disorder in primary care"
          description="Despite the persistent increase in overdose deaths, access to medications for opioid use disorders remains limited. Recent federal funding aimed at increasing access prompts a need to understand if implementation strategies improve access."
          learnMoreLink="https://doi.org/10.1177/26334895211005809"
          hasPresentaion="https://drive.google.com/file/d/1edILv6HFkVihGKrIcr2mgESsi6Ge8eoY/view"
        ></Article>
        <Article
          isBlue={false}
          heading="Opening the “black box”: Four common implementation strategies for expanding the use of medications for opioid use disorder in primary care"
          description="Despite the persistent increase in overdose deaths, access to medications for opioid use disorders remains limited. Recent federal funding aimed at increasing access prompts a need to understand if implementation strategies improve access."
          learnMoreLink="https://doi.org/10.1177/26334895211005809"
        ></Article>
        <Article
          isBlue={true}
          heading="Opening the “black box”: Four common implementation strategies for expanding the use of medications for opioid use disorder in primary care"
          description="Despite the persistent increase in overdose deaths, access to medications for opioid use disorders remains limited. Recent federal funding aimed at increasing access prompts a need to understand if implementation strategies improve access."
          learnMoreLink="https://doi.org/10.1177/26334895211005809"
        ></Article>
      </div>
    </div>
  );
}

export default Research;
