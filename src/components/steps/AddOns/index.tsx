import { useState } from "react";
import { Plan } from "../../../types";
import Checkbox from "./Checkbox";
import Option from "./Option";

const options = [
  {
    title: "Online service",
    subtitle: "Access to multiplayer games",
  },
  {
    title: "Larger storage",
    subtitle: "Extra 1TB of cloud save",
  },
  {
    title: "Customizable profile",
    subtitle: "Custom theme on your profile",
  },
];

const mapAddOnPrice = {
  Monthly: [1, 2, 2],
  Yearly: [10, 20, 20],
};

type Props = {
  plan: Plan;
};

export default function AddOns({ plan }: Props) {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([
    "Online service",
  ]);

  const handleCheck = (optionTitle: string) => {
    setSelectedOptions((prevSelectedOptions) => {
      if (prevSelectedOptions.includes(optionTitle)) {
        return prevSelectedOptions.filter(
          (optionArg) => optionArg !== optionTitle
        );
      } else {
        return [...prevSelectedOptions, optionTitle];
      }
    });
  };

  // TODO Option needs to be refactored
  return (
    <div className="addOns">
      {options.map(({ title, subtitle }, index) => (
        <Option
          key={title}
          isActive={selectedOptions.includes(title)}
          onChange={() => handleCheck(title)}
          title={title}
          subtitle={subtitle}
        >
          +${mapAddOnPrice[plan][index]}/{plan === "Monthly" ? "mo" : "yr"}
        </Option>
      ))}
    </div>
  );
}
