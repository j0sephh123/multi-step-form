import Step from "./Step";

const steps = ["YOUR INFO", "SELECT PLAN", "ADD-ONS", "SUMMARY"];

type Props = {
  step: number;
  onClick: (clickedStep: number) => void;
};

export default function Sidebar({ step, onClick }: Props) {
  return (
    <div className="sidebar">
      <div className="steps">
        {steps.map((stepItem, index) => (
          <Step
            onClick={() => onClick(index + 1)}
            isActive={index + 1 === step}
            key={stepItem}
            index={index + 1}
          >
            {stepItem}
          </Step>
        ))}
      </div>
    </div>
  );
}
