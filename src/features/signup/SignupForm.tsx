import SplitScreenLayout from "@/layout/SplitScreenLayout";
import { useSignup } from "./contexts/signup.context";
import StepOneForm from "./steps/StepOne";
import { signFormStepsImages } from "./constants/signup-images";
import StepTwoForm from "./steps/StepTwo";
import StepThreeForm from "./steps/StepThree";

function SignupForm() {
  const { step, next, prev } = useSignup();

  return (
    <SplitScreenLayout imageSrc={signFormStepsImages[step - 1]}>
      {step === 1 && <StepOneForm onContinue={next} />}
      {step === 2 && <StepTwoForm onContinue={next} onBack={prev} />}
      {step === 3 && <StepThreeForm onContinue={next} onBack={prev} />}
    </SplitScreenLayout>
  );
}

export default SignupForm;
