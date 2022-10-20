import React from "react";
import Indexcandid from "../src/componants/Hero/indexcandid";
import Contactform from "../src/componants/Contact";

import S1candid from "../src/componants/candidates/section1";
import Candidhow from "../src/componants/candidates/section3";
import Candidfive from "../src/componants/candidates/section2";
function Candidates() {
  return (
    <div>
      <div id="1">
        {" "}
        <Indexcandid />
      </div>
      <div id="2">
        {" "}
        <S1candid />
      </div>
      <div id="3">
        {" "}
        <Candidfive />
      </div>
      <div className="p-8" id="4 ">
        {" "}
        <Candidhow />
      </div>

      <div id="5">
        {" "}
        <Contactform />
      </div>
    </div>
  );
}

export default Candidates;
