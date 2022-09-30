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
      <Hero />
      <Sectionone />
      <Sectiontwo />
      <Sectionthree />
      <Container />
      <Contactform />
    </>
  );
}
