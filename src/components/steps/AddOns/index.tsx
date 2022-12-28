import { useState } from "react";
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

export default function AddOns() {
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

  return (
    <div className="thirdStep">
      {options.map(({ title, subtitle }) => (
        <Option
          key={title}
          isActive={selectedOptions.includes(title)}
          onChange={() => handleCheck(title)}
          title={title}
          subtitle={subtitle}
        />
      ))}
    </div>
  );
}
