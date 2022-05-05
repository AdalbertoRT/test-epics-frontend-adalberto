import React from "react";
import Section from "../Section";
import Title from "../Title";
import { MainComponent } from "./style";

const Main = () => {
  return (
    <MainComponent className="container bg-white p-4">
      <Title />
      <Section />
    </MainComponent>
  );
};

export default Main;
