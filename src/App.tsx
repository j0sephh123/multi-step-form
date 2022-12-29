import { useRef, useState } from "react";
import AppWrapper from "./components/wrappers/AppWrapper";
import Content from "./components/wrappers/Content";
import Controls from "./components/Controls";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import YourInfo from "./components/steps/YourInfo";
import Summary from "./components/steps/Summary";
import SelectYourPlan from "./components/steps/SelectYourPlan";
import ThankYou from "./components/steps/ThankYou";
import AddOns from "./components/steps/AddOns";
import { Billing } from "./types";

function App() {
  const [step, setStep] = useState(1);
  const [billing, setBilling] = useState<Billing>("Monthly");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [shouldGetValues, setShouldGetValues] = useState(false);

  const valuesRef = useRef({ yourInfo: null });

  // const [values, setValues] = useState<any>(null);

  const handleNext = () => {
    if (step === 1) {
      console.log("doing validation of inputs...");
      console.log("TODO add inputs to a global object");
      setShouldGetValues(true);
    }

    if (step === 2) {
    }
    // setValues(values);
    // setStep((prevStep) => {
    //   if (prevStep === 4) {
    //     setIsSubmitted(true);
    //     return prevStep;
    //   }
    //   return prevStep + 1;
    // });
  };

  const handleGoBack = () => setStep((prevStep) => prevStep - 1);

  const handleStepClick = (clickedStep: number) => setStep(clickedStep);

  const isFirstStep = step === 1;
  const isLastStep = step === 4;

  const handleChangeClick = () => setStep(2);

  const getYourInfo = (values: any) => {
    console.log(values);
    // console.log(values);
    // valuesRef.current.yourInfo = values;
    // setShouldGetValues(false);
    // setStep(2);
  };

  return (
    <AppWrapper>
      <Sidebar step={step} />
      <Content
        controls={
          !isSubmitted && (
            <Controls
              isLastStep={isLastStep}
              isFirstStep={isFirstStep}
              onBack={handleGoBack}
              onNext={handleNext}
            />
          )
        }
      >
        {!isSubmitted && <Header step={step} />}
        {isFirstStep && (
          <YourInfo shouldGetValues={shouldGetValues} getValues={getYourInfo} />
        )}
        {step === 2 && (
          <SelectYourPlan billing={billing} setBilling={setBilling} />
        )}
        {step === 3 && <AddOns billing={billing} />}
        {isLastStep && !isSubmitted && (
          <Summary onChangeClick={handleChangeClick} />
        )}
        {isSubmitted && <ThankYou />}
      </Content>
    </AppWrapper>
  );
}

export default App;
