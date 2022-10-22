import Container from "../src/componants/container";
import Hero from "../src/componants/Hero";
import Sectionone from "../src/componants/sectionone";
import Sectiontwo from "../src/componants/sectiontwo";
import Sectionthree from "../src/componants/sectionthree";
import Contactform from "../src/componants/Contact/index";
export default function Home() {
  return (
    <>
      <Container />
      <div id="">
        {" "}
        <Hero />
      </div>
      <div id="1">
        {" "}
        <Sectionone />
      </div>
      <div id="2">
        {" "}
        <Sectiontwo />
      </div>
      <div id="3">
        {" "}
        <Sectionthree />
      </div>

      <Container />
      <div id="5">
        <Contactform />
      </div>
    </>
  );
}
