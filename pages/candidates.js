import React from "react";
import Indexcandid from "../src/componants/Hero/indexcandid";
import Contactform from "../src/componants/Contact";
import Sectionfive from "../src/componants/clients/sectionfive";
import Sectionsix from "../src/componants/clients/sectionsix";
import S1candid from "../src/componants/candidates/section1";
import Candidhow from "../src/componants/candidates/section3";
function Candidates() {
  return (
    <div>
      <Indexcandid />
      <S1candid />
      <Sectionfive />
      <Candidhow />
      <Contactform />
    </div>
  );
}

export default Candidates;
