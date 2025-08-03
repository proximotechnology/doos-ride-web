import { useState, type ReactNode } from "react";
import { SignupContext } from "./signup.context";

const maxSteps = 5;

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

  return (
    <SignupContext.Provider
      value={{
        step,
        next: nextStep,
        prev: prevStep,
      }}
    >
      {children}
    </SignupContext.Provider>
  );
};

export default SignupProvider;
