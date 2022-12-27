import { useRef, useState } from "react";
import AppWrapper from "./components/AppWrapper";
import Controls from "./components/Controls";
import Field from "./components/Field";
import Sidebar from "./components/Sidebar";
import { Step } from "./types";

function App() {
  const [step, setStep] = useState<Step>(2);
  const [values, setValues] = useState<any>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);

  const handleNext = () => {
    if (!nameRef.current || !emailRef.current || !phoneRef.current) {
      return;
    }

    const values = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      phone: phoneRef.current.value,
    };

    nameRef.current.value = "";
    emailRef.current.value = "";
    phoneRef.current.value = "";

    setValues(values);
    setStep(2);
  };

  const handleGoBack = () => setStep(1);

  const isFirstStep = step === 1;

  return (
    <AppWrapper>
      <Sidebar step={step} />
      <div className="content__wrapper">
        <div className="content">
          <div className="title">Personal info</div>
          <div className="subtitle">
            Please provide your name, email address, and phone number.
          </div>
          {isFirstStep && (
            <>
              <Field name="Name">
                <input
                  className="input"
                  id="name"
                  placeholder="e.g. Stephen King"
                  ref={nameRef}
                />
              </Field>
              <Field name="Email Address">
                <input
                  className="input"
                  id="email"
                  placeholder="e.g. stephenking@lorem.com"
                  ref={emailRef}
                  type="email"
                />
              </Field>
              <Field name="Phone Number">
                <input
                  className="input"
                  id="phone"
                  placeholder="e.g. +1 234 567 890"
                  ref={phoneRef}
                  type="tel"
                />
              </Field>
            </>
          )}
          {step === 2 && <div>step 2</div>}
        </div>
        <Controls
          isFirstStep={isFirstStep}
          onBack={handleGoBack}
          onNext={handleNext}
        />
      </div>
    </AppWrapper>
  );
}

export default App;
