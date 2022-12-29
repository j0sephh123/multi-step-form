import { PropsWithChildren } from "react";
import { Billing } from "../../../types";

type Props = {
  billing: Billing;
  onClick: () => void;
};

type SwitchLabelProps = {
  isChecked: boolean;
} & PropsWithChildren;

const SwitchLabel = ({ children, isChecked }: SwitchLabelProps) => (
  <div
    className={`switchWrapper__label ${
      isChecked ? "switchWrapper__label--checked" : ""
    }`}
  >
    {children}
  </div>
);

export default function Switch({ billing, onClick }: Props) {
  return (
    <div className="switchWrapper">
      <SwitchLabel isChecked={billing === "Monthly"}>Monthly</SwitchLabel>
      <label className="switch">
        <input onChange={onClick} type="checkbox" checked={billing === "Yearly"} />
        <span className="slider round"></span>
      </label>
      <SwitchLabel isChecked={billing === "Yearly"}>Yearly</SwitchLabel>
    </div>
  );
}
