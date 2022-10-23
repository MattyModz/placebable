import React from "react";
import Indexclient from "../src/componants/Hero/indexclient";
import Sectionfour from "../src/componants/clients/sectionfour";
import Sectionfive from "../src/componants/clients/sectionfive";
import Sectionsix from "../src/componants/clients/sectionsix";
import Contactform from "../src/componants/Contact/index";
function Clients() {
  return (
    <div>
      <div id="">
        {" "}
        <Indexclient />
      </div>
      <div id="">
        {" "}
        <Sectionfour />
      </div>
      <div id="3">
        {" "}
        <Sectionfive />
      </div>
      <div id="4" className="">
        {" "}
        <Sectionsix />{" "}
      </div>
      <div id="5">
        {" "}
        <Contactform />
      </div>
    </div>
  );
}

export default Clients;
