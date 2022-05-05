import React from "react";
import { TitleComponent } from "./style";

const Title = () => {
  return (
    <TitleComponent className="d-flex flex-column align-items-center justify-content-center">
      <h1 className="fw-bold text-dark text-center">Get started today</h1>
      <p className="text-secondary text-center">
        Choose the right plan and start creating projects
      </p>
    </TitleComponent>
  );
};

export default Title;
