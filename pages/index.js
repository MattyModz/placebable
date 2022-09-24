import Container from "../src/componants/container";
import Hero from "../src/componants/Hero";
import Sectionone from "../src/componants/sectionone";
import Sectiontwo from "../src/componants/sectiontwo";
import Sectionthree from "../src/componants/sectionthree";

export default function Home() {
  return (
    <>
      <Container />
      <Hero />
      <Sectionone />
      <Sectiontwo />
      <Sectionthree />
      <Container />
    </>
  );
}
