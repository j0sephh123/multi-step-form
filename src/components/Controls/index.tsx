type Props = {
  onBack: () => void;
  onNext: () => void;
  isFirstStep: boolean;
  isLastStep: boolean;
};

export default function Controls({
  onBack,
  onNext,
  isFirstStep,
  isLastStep,
}: Props) {
  return (
    <div className="button__wrapper">
      <div onClick={onBack} className="goBack">
        {isFirstStep ? "" : "Go Back"}
      </div>
      <button className={`button ${isLastStep ? "isConfirm" : ""}`} onClick={onNext}>
        {isLastStep ? "Confirm" : "Next Step"}
      </button>
    </div>
  );
}
