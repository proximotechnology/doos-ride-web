import { createContext, useContext } from "react";

export interface SignupContextType {
  step: number;
  next: (cb?: () => void) => void;
  prev: () => void;
  startOtp: () => void;
  finishOtp: () => void;
}

// Create the context
export const SignupContext = createContext<SignupContextType>({
  next: (_?: () => void) => {},
  prev: () => {},
  step: 1,
  finishOtp: () => {},
  startOtp: () => {},
});

// Create a custom hook to use the context
export const useSignup = () => {
  const context = useContext(SignupContext);
  if (context === undefined) {
    throw new Error("useSignup must be used within a SignupProvider");
  }
  return context;
};
