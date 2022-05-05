import React, { Fragment } from "react";
import * as C from "./style";

interface PropsCard {
  select: any;
  title: string;
  plans: Function;
  plan: string;
}

const Card = ({ select, title, plans, plan }: PropsCard) => {
  return (
    <C.CardComponent
      className={`card p-4 gap-4 d-flex ${plan ? "flex-row" : "flex-column"} justify-content-between ${
        title === "Starter" ? "bg-white text-dark" : "bg-primary text-light border-0 shadow-none"
      }`}
    >
      <C.CardHeader className="d-flex">
        <C.CardImg className="rounded" />
        <C.CardTitle>
          <div>
            <strong>{title}</strong>
            <div>
              <sup className={`lead mx-1 ${title === "Starter" ? "text-muted opacity-100" : "text-light opacity-75"}`}>&euro;</sup>
              <strong>
                <span className="display-6 mx-1">0</span>
              </strong>
              <span className={`lead ${title === "Starter" ? "text-muted opacity-100" : "text-light opacity-75"}`}>/ month</span>
            </div>
          </div>
        </C.CardTitle>
      </C.CardHeader>
      {!plan ? (
        <div className="d-flex flex-column w-100">
          <C.CardBody>Test</C.CardBody>
          <C.CardFooter className="w-100">
            <div className="d-grid align-items-center">
              <button
                type="button"
                className={`btn ${title === "Starter" ? "btn-starter btn-primary text-light" : "btn-professional btn-light text-primary"} shadow`}
                onClick={(e) => select(e)}
              >
                Choose {title}
              </button>
            </div>
          </C.CardFooter>
        </div>
      ) : (
        <div className="d-flex align-items-center show">
          <C.CardFooter className="w-100">
            <div className="d-grid align-items-center justify-content-end">
              <button
                type="button"
                className={`btn ${title === "Starter" ? "btn-outline-primary text-primary" : "btn-outline-light text-light"} shadow`}
                onClick={() => plans()}
              >
                Choose plan
              </button>
            </div>
          </C.CardFooter>
        </div>
      )}
    </C.CardComponent>
  );
};

export default Card;
