import React from "react";
import Indexcandid from "../src/componants/Hero/indexcandid";
import Contactform from "../src/componants/Contact";

import S1candid from "../src/componants/candidates/section1";
import Candidhow from "../src/componants/candidates/section3";
import Candidfive from "../src/componants/candidates/section2";
function Candidates() {
  return (
    <>
      <Indexcandid />

      <S1candid />

      <Candidfive />

      <Candidhow />
      <div id="5">
        <Contactform />
      </div>
    </>
  );
}

export default Candidates;
