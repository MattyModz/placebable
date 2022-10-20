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
      <div id="2">
        {" "}
        <Sectionfour />
      </div>
      <div id="3">
        {" "}
        <Sectionfive />
      </div>
      <div id="4" className="bg-[#1E1E1E] lg:h-screen lg:grid items-center">
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
