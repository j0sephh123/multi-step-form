import Step from "./Step";

const steps = ["YOUR INFO", "SELECT PLAN", "ADD-ONS", "SUMMARY"];

type Props = {
  step: number;
};

export default function Sidebar({ step }: Props) {
  return (
    <div className="sidebar">
      <div className="steps">
        {steps.map((stepItem, index) => (
          <Step isActive={index + 1 === step} key={stepItem} index={index + 1}>
            {stepItem}
          </Step>
        ))}
      </div>
    </div>
  );
}
