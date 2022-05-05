import React from "react";
import Cards from "../Cards";
import Contact from "../Contact";
import { SectionComponent } from "./style";

const Section = () => {
  return (
    <SectionComponent className="d-flex flex-column justify-content-center align-items-center">
      <Cards />
      <Contact />
    </SectionComponent>
  );
};

export default Section;
