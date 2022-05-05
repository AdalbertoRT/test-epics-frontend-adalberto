import React from "react";
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
      className={`card p-4 gap-4 d-flex flex-column align-items-center ${
        title === "Starter"
          ? "bg-white text-dark"
          : "bg-primary text-light border-0 shadow-none"
      }`}
    >
      <C.CardHeader className="d-flex">
        <C.CardImg className="rounded" />
        <C.CardTitle>
          <div>
            <strong>{title}</strong>
            <div>
              <sup
                className={`lead mx-1 ${
                  title === "Starter"
                    ? "text-muted opacity-100"
                    : "text-light opacity-75"
                }`}
              >
                &euro;
              </sup>
              <strong>
                <span className="display-6 mx-1">0</span>
              </strong>
              <span
                className={`lead ${
                  title === "Starter"
                    ? "text-muted opacity-100"
                    : "text-light opacity-75"
                }`}
              >
                / month
              </span>
            </div>
          </div>
        </C.CardTitle>
      </C.CardHeader>
      <C.CardBody>Test</C.CardBody>
      <C.CardFooter>
        {!plan ? (
          <button
            className={`btn ${
              title === "Starter"
                ? "btn-starter btn-primary text-light"
                : "btn-professional btn-light text-primary"
            } shadow`}
            onClick={(e) => select(e)}
          >
            Choose {title}
          </button>
        ) : (
          <button
            className={`btn ${
              title === "Starter"
                ? "btn-outline-primary text-primary"
                : "btn-outline-light text-light"
            } shadow`}
            onClick={() => plans()}
          >
            Choose plan
          </button>
        )}
      </C.CardFooter>
    </C.CardComponent>
  );
};

export default Card;
