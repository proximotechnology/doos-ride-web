import { useState, type ReactNode } from "react";
import { SignupContext } from "./signup.context";

const maxSteps = 4;

interface SignupProviderProps {
  children: ReactNode;
}

const SignupProvider = ({ children }: SignupProviderProps) => {
  const [step, setStep] = useState<number>(1);

  const nextStep = (cb?: () => void) => {
    if (step === maxSteps) {
      cb?.();
      return;
    }
    setStep((prev) => prev + 1);
  };

  const prevStep = () => {
    if (step === 1) return;
    setStep((prev) => prev - 1);
  };

  const startOtp = () => {
    setStep(-1);
  };

  const finishOtp = () => {
    setStep(2);
  };

  return (
    <SignupContext.Provider
      value={{
        step,
        next: nextStep,
        prev: prevStep,
        startOtp,
        finishOtp,
      }}
    >
      {children}
    </SignupContext.Provider>
  );
};

export default SignupProvider;
