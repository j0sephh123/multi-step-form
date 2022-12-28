import { PropsWithChildren } from "react";

type Props = {
  index: number;
  isActive: boolean;
} & PropsWithChildren;

export default function Step({ children, isActive, index }: Props) {
  return (
    <div className="step">
      <div
        className={`step__number ${isActive ? "step__number--isАctive" : ""}`}
      >
        {index}
      </div>
      <div className="step__info">
        <div className="step__info--index">STEP {index}</div>
        <div className="step__info--value">{children}</div>
      </div>
    </div>
  );
}
