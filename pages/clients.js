import React from "react";
import Indexclient from "../src/componants/Hero/indexclient";
import Sectionfour from "../src/componants/clients/sectionfour";
import Sectionfive from "../src/componants/clients/sectionfive";
import Sectionsix from "../src/componants/clients/sectionsix";
import Contactform from "../src/componants/Contact/index";
function Clients() {
  return (
    <div className="">
      <div id="1">
        {" "}
        <Indexclient />
      </div>
      <div
        id="2"
        className="h-screen
      "
      >
        {" "}
        <Sectionfour />
      </div>
      <div
        id="3"
        className="h-screen
      "
      >
        {" "}
        <Sectionfive />
      </div>
      <div
        id="4"
        className="h-screen
      "
      >
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
