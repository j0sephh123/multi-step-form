import { useState } from "react";
import AppWrapper from "./components/wrappers/AppWrapper";
import Content from "./components/wrappers/Content";
import Controls from "./components/Controls";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import FirstStep from "./components/steps/YourInfo";
import ForthStep from "./components/steps/Summary";
import SelectYourPlan from "./components/steps/SelectYourPlan";
import ThankYou from "./components/steps/ThankYou";
import ThirdStep from "./components/steps/AddOns";
import { Plan } from "./types";

function App() {
  const [step, setStep] = useState(4);
  const [plan, setPlan] = useState<Plan>('Monthly');
  console.log(plan);
  
  // const [values, setValues] = useState<any>(null);

  const handleNext = () => {
    // if (!nameRef.current || !emailRef.current || !phoneRef.current) {
    //   return;
    // }

    // const values = {
    //   name: nameRef.current.value,
    //   email: emailRef.current.value,
    //   phone: phoneRef.current.value,
    // };

    // nameRef.current.value = "";
    // emailRef.current.value = "";
    // phoneRef.current.value = "";

    // setValues(values);
    setStep((prevStep) => prevStep + 1);
  };

  const handleGoBack = () => setStep((prevStep) => prevStep - 1);

  const handleStepClick = (clickedStep: number) => setStep(clickedStep);

  const isFirstStep = step === 1;
  const isLastStep = step === 4;

  const isSubmitted = false;

  return (
    <AppWrapper>
      <Sidebar onClick={handleStepClick} step={step} />
      <Content
        controls={
          <Controls
            isLastStep={isLastStep}
            isFirstStep={isFirstStep}
            onBack={handleGoBack}
            onNext={handleNext}
          />
        }
      >
        {!isSubmitted && <Header step={step} />}
        {isFirstStep && <FirstStep />}
        {step === 2 && <SelectYourPlan plan={plan} setPlan={setPlan} />}
        {step === 3 && <ThirdStep />}
        {isLastStep && <ForthStep />}
        {isSubmitted && <ThankYou />}
      </Content>
    </AppWrapper>
  );
}

export default App;
