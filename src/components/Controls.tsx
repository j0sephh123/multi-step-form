type Props = {
  onBack: () => void;
  onNext: () => void;
  isFirstStep: boolean;
};

export default function Controls({ onBack, onNext, isFirstStep }: Props) {
  return (
    <div className="button__wrapper">
      <div onClick={onBack} className="goBack">
        {isFirstStep ? "" : "Go Back"}
      </div>
      <button className="button" onClick={onNext}>
        Next Step
      </button>
    </div>
  );
}
