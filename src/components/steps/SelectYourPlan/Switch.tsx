import { PropsWithChildren } from "react";
import { Plan } from "../../../types";

type Props = {
  plan: Plan;
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

export default function Switch({ plan, onClick }: Props) {
  return (
    <div className="switchWrapper">
      <SwitchLabel isChecked={plan === "Monthly"}>Monthly</SwitchLabel>
      <label className="switch">
        <input onChange={onClick} type="checkbox" checked={plan === "Yearly"} />
        <span className="slider round"></span>
      </label>
      <SwitchLabel isChecked={plan === "Yearly"}>Yearly</SwitchLabel>
    </div>
  );
}
