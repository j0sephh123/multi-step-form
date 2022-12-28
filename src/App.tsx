import { useState } from "react";
import AppWrapper from "./components/AppWrapper";
import Content from "./components/Content";
import Controls from "./components/Controls";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import FirstStep from "./components/steps/First";
import ForthStep from "./components/steps/Forth";
import SecondStep from "./components/steps/Second";
import ThankYou from "./components/steps/ThankYou";
import ThirdStep from "./components/steps/Third";

function App() {
  const [step, setStep] = useState(4);
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

  const isSubmitted = true;

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
        <div className="content__wrapper">
          <div className="content">
            {!isSubmitted && <Header step={step} />}
            {/* {isFirstStep && <FirstStep />}
            {step === 2 && <SecondStep />}
            {step === 3 && <ThirdStep />}
            {isLastStep && <ForthStep />} */}
            {isSubmitted && <ThankYou/>}
          </div>
        </div>
      </Content>
    </AppWrapper>
  );
}

export default App;
