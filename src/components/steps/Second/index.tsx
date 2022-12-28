import ArcadeIcon from "../../../assets/images/icon-arcade.svg";
import AdvancedIcon from "../../../assets/images/icon-advanced.svg";
import ProIcon from "../../../assets/images/icon-pro.svg";
import Card from "./Card";
import { useState } from "react";
import Switch from "./Switch";

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

const options = ["Monthly", "Yearly"] as [string, string];

export default function SecondStep() {
  const [selected, setSelected] = useState<number | null>(1);
  const [checkedIndex, setIsChecked] = useState(0);

  const toggleCheck = () => setIsChecked((c) => (c === 1 ? 0 : 1));

  console.log(checkedIndex);
  

  return (
    <>
      <div className="cards">
        {cards.map((card, index) => (
          <Card
            onClick={() => setSelected(index)}
            isActive={index === selected}
            {...card}
          />
        ))}
      </div>
      <Switch options={options} onClick={toggleCheck} checkedIndex={checkedIndex} />
    </>
  );
}
