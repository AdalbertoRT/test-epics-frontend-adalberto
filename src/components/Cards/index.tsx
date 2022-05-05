import React, { useState } from "react";
import Card from "../Card";
import { CardsComponent } from "./style";

const Cards = () => {
  const [gap, setGap] = useState(true);
  const [plan, setPlan] = useState("");

  const handleCard = (e: string) => {
    setPlan(e);
    setTimeout(() => {
      setGap(false);
    }, 1000);
  };

  const handlePlans = () => {
    setPlan("");
    setGap(true);
  };

  return (
    <CardsComponent className={`d-flex w-100 ${gap && "gap-3"}`}>
      <div className={`starter plan ${plan === "Professional" && "hide"}`}>
        <Card title="Starter" select={() => handleCard("Starter")} plans={handlePlans} plan={plan} />
      </div>
      <div className={`professional plan ${plan === "Starter" && "hide"}`}>
        <Card title="Professional" select={() => handleCard("Professional")} plans={handlePlans} plan={plan} />
      </div>
    </CardsComponent>
  );
};

export default Cards;
