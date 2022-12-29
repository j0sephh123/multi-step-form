import ArcadeIcon from "../../../assets/images/icon-arcade.svg";
import AdvancedIcon from "../../../assets/images/icon-advanced.svg";
import ProIcon from "../../../assets/images/icon-pro.svg";
import Card from "./Card";
import { useState } from "react";
import Switch from "./Switch";
import { Billing } from "../../../types";

const cards = [
  {
    label: "Arcade",
    icon: ArcadeIcon,
  },
  {
    label: "Advanced",
    icon: AdvancedIcon,
  },
  {
    label: "Pro",
    icon: ProIcon,
  },
];

const mapPlanPrice = {
  Monthly: [9, 12, 15],
  Yearly: [90, 120, 150],
};

type Props = {
  billing: Billing;
  setBilling: React.Dispatch<React.SetStateAction<Billing>>;
};

export default function SelectYourPlan({ billing, setBilling }: Props) {
  const [selected, setSelected] = useState<number | null>(1);

  const togglePlan = () =>
  setBilling((c) => (c === "Monthly" ? "Yearly" : "Monthly"));

  return (
    <>
      <div className="selectYourPlan">
        {cards.map((card, index) => (
          <Card
            onClick={() => setSelected(index)}
            isActive={index === selected}
            {...card}
          >
            ${mapPlanPrice[billing][index]}/{billing === "Monthly" ? "mo" : "yr"}
          </Card>
        ))}
      </div>
      <Switch onClick={togglePlan} billing={billing} />
    </>
  );
}
