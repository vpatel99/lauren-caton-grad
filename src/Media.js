import React from "react";
import "./App.css";
import MediaComponent from "./MediaComponent.js";

function Media() {
  return (
    <div id="Media" class="page__offWhite">
      <h1 class="page__title">MEDIA</h1>
      <div class="container">
        <MediaComponent
          isBlue={true}
          heading="Texas Tribune"
          description="The “other” wall Texas is building--around teen moms"
          learnMoreLink="https://www.tribtalk.org/2017/12/11/the-other-wall-texas-is-building-around-teen-moms/"
        ></MediaComponent>
        <MediaComponent
          isBlue={false}
          heading="Austin American Statesman"
          description="Investigative journalism research assistant for “We Don’t Heal from It: Investigating Big Horn County’s Criminal Prosecutions of Alcohol in Pregnancy"
          learnMoreLink="https://www.statesman.com/news/20171115/commentary-how-jane-doe-case-reveals-texas-glaring-weakness"
        ></MediaComponent>
        <MediaComponent
          isBlue={true}
          heading="Ms. Magazine"
          description="I’m proud of Texas, but not our record on sexual and reproductive health"
          learnMoreLink="https://msmagazine.com/2016/11/01/im-proud-texas-not-record-sexual-reproductive-health/"
        ></MediaComponent>
      </div>
    </div>
  );
}

export default Media;
