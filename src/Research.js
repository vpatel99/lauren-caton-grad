import React from "react";
import "./Research.css";
import "./App.css";
import Article from "./Article.js";

function Research() {
  return (
    <div id="Research">
      <h1 class="research__title">RESEARCH</h1>
      <div class="research__heading">I. Implementation Science</div>
      <div class="container">
        <Article
          isBlue={true}
          heading="Opening the “black box”: Four common implementation strategies for expanding the use of medications for opioid use disorder in primary care"
          description="Despite the persistent increase in overdose deaths, access to medications for opioid use disorders remains limited. Recent federal funding aimed at increasing access prompts a need to understand if implementation strategies improve access."
          learnMoreLink="https://doi.org/10.1177/26334895211005809"
          hasPresentaion="https://drive.google.com/file/d/1edILv6HFkVihGKrIcr2mgESsi6Ge8eoY/view?usp=sharing"
        ></Article>
        <Article
          isBlue={false}
          heading="Implementation of the hub and spoke model for opioid use disorders in California: Rationale, design and anticipated impact"
          description="As part of the State Targeted Response to the opioid epidemic, California has adopted the Hub and Spoke model to expand access to medications for opioid use disorder, particularly buprenorphine, throughout the state."
          learnMoreLink="https://doi.org/10.1016/j.jsat.2019.07.013"
          hasPresentaion="https://docs.google.com/presentation/d/1sHBG2Gnxhzl4A3f_lM9r_LHVcYLLBF6q/edit?usp=sharing&ouid=109344806896851671344&rtpof=true&sd=true"
        ></Article>
        <Article
          isBlue={true}
          heading="Expanding access to medications for opioid use disorder in primary care: an examination of common implementation strategies"
          description="Buprenorphine, a medication for opioid use disorder, remains vastly underutilized despite its proven eficacy.  This  study  sought  to  evaluate  which  strategies,  within  a  system  that  employed  a  variety  of  concurrent strategies, effectively increased access to buprenorphine."
          learnMoreLink="https://www.researchgate.net/publication/345019562_Expanding_access_to_medications_for_opioid_use_disorder_in_primary_care_an_examination_of_common_implementation_strategies"
        ></Article>
      </div>
      <div class="research__heading">II. Substance Use Disorder Policy</div>
      <div class="container">
        <Article
          isBlue={true}
          heading="The prospects for sustaining evidence-based responses to the US opioid epidemic: state leadership perspectives"
          description="The US 21st Century Cures Act provided $7.5 billion in grant funding to states and territories for evidence-based responses to the opioid epidemic. Currently, little is known about optimal strategies for sustaining these programs beyond this start-up funding."
          learnMoreLink="https://doi.org/10.1186/s13011-020-00326-x"
          hasPresentaion="https://drive.google.com/file/d/1H77acce8NqmZZRizXu9XECLS7KlqeEUN/view?usp=sharing"
        ></Article>
        <Article
          isBlue={false}
          heading="COVID-19 Adaptations in the Care of Patients with Opioid Use Disorder: a Survey of California Primary Care Clinics"
          description="With the onset of the COVID-19 crisis, many federal agencies relaxed policies regulating opioid use disorder treatment. The impact of these changes has been minimally documented. The abrupt nature of these shifts provides a naturalistic opportunity to examine adaptations for opioid use disorder treatment in primary care."
          learnMoreLink="https://doi.org/10.1007/s11606-020-06436-3"
        ></Article>
      </div>
      <div class="research__heading">III. Maternal and Child Health</div>
      <div class="container">
        <Article
          isBlue={true}
          heading="Planned, unplanned and in-between: the meaning and context of pregnancy planning for young people"
          description="Our analysis suggests that binary operationalization of pregnancies as “planned” and “unplanned” neglects the complexity of young people's lived experiences and perspectives. Contraceptive counseling approaches that allow patients the flexibility to express their considerations and feelings toward a potential future pregnancy could improve the quality of family planning visits and patient–provider interactions."
          learnMoreLink="https://doi.org/10.1016/j.contraception.2018.08.012"
          hasPresentaion="https://drive.google.com/file/d/1IWLaUZ4oROmvUXrUWTy0fvY6VUFA0pfv/view?usp=sharing"
        ></Article>
        <Article
          isBlue={false}
          heading="Desire, Acceptability, and Expected Resolution: A Latent Class Analysis of Current
          Pregnancy Orientation in the United States. Perspectives on sexual and reproductive health. In Press"
          description="Scant research has examined latent and contextual dimensions of pregnancy intentions, conventionally classifying unintended pregnancies as mistimed (wanted later) or unwanted (not wanted at all). Being at risk of mistimed pregnancy likely encompasses a broad spectrum of emotions and expectations regarding pregnancy and merits further exploration."
          learnMoreLink="https://pubmed.ncbi.nlm.nih.gov/35156298/"
        ></Article>
      </div>
    </div>
  );
}

export default Research;
