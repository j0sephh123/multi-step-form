import { PropsWithChildren } from "react";

type Props = {
  index: number;
  isActive: boolean;
  onClick: () => void;
} & PropsWithChildren;

export default function Step({ onClick, children, isActive, index }: Props) {
  return (
    <div onClick={onClick} className="step">
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
