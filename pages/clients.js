import React from "react";
import Indexclient from "../src/componants/Hero/indexclient";
import Sectionfour from "../src/componants/clients/sectionfour";
import Sectionfive from "../src/componants/clients/sectionfive";
import Sectionsix from "../src/componants/clients/sectionsix";
import Contactform from "../src/componants/Contact/index";
function Clients() {
  return (
    <>
      <Indexclient />

      <Sectionfour />

      <Sectionfive />
      <Sectionsix />

      <Contactform />
    </>
  );
}

export default Clients;
