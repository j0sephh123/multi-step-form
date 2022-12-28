import ArcadeIcon from "../../../assets/images/icon-arcade.svg";
import AdvancedIcon from "../../../assets/images/icon-advanced.svg";
import ProIcon from "../../../assets/images/icon-pro.svg";
import Card from "./Card";
import { useState } from "react";
import Switch from "./Switch";
import { Plan } from "../../../types";

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


type Props = {
  plan: Plan;
  setPlan: React.Dispatch<React.SetStateAction<Plan>>;
};

export default function SelectYourPlan({ plan, setPlan }: Props) {
  const [selected, setSelected] = useState<number | null>(1);

  const togglePlan = () => setPlan((c) => c === 'Monthly' ? 'Yearly' : 'Monthly');

  return (
    <>
      <div className="selectYourPlan">
        {cards.map((card, index) => (
          <Card
            onClick={() => setSelected(index)}
            isActive={index === selected}
            {...card}
          />
        ))}
      </div>
      <Switch
        onClick={togglePlan}
        plan={plan}
      />
    </>
  );
}
