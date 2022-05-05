import React from "react";
import { ContactComponent } from "./style";

const Contact = () => {
  return (
    <ContactComponent className="w-75 mt-3 d-flex flex-column align-items-center justify-content-center">
      <p className="m-0 text-secondary">
        Do you need more information on plans?
      </p>
      <button className="p-0 btn btn-link text-primary text-decoration-none fw-bold">
        Contact us
      </button>
    </ContactComponent>
  );
};

export default Contact;
