import { Step } from "../types";

const steps = ["YOUR INFO", "SELECT PLAN", "ADD-ONS", "SUMMARY"];

type Props = {
  step: Step;
};

export default function Sidebar({ step }: Props) {
  return (
    <div className="sidebar">
      <div className="steps">
        {steps.map((stepItem, index) => (
          <div key={stepItem} className="step">
            <div
              className={`step__number ${
                index + 1 === step ? "step__number--isАctive" : ""
              }`}
            >
              {index + 1}
            </div>
            <div className="step__info">
              <div className="step__info--label">STEP {index + 1}</div>
              <div className="step__info--value">{stepItem}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
