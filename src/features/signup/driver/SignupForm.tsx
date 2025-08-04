import SplitScreenLayout from "@/layout/SplitScreenLayout";
import { useSignup } from "./contexts/signup.context";
import StepOneForm from "./steps/StepOne";
import { signFormStepsImages } from "./constants/signup-images";
import StepTwoForm from "./steps/StepTwo";
import StepThreeForm from "./steps/StepThree";
import StepFour from "./steps/StepFour";
import PhoneOtpVerificationForm from "@/features/otp-verification/PhoneOtpVerificationForm";
import otpSideImage from "@/assets/otp-verification-side-image.png";

function SignupForm() {
  const { step, next, prev, finishOtp, startOtp } = useSignup();

  return (
    <SplitScreenLayout
      imageSrc={step == -1 ? otpSideImage : signFormStepsImages[step - 1]}
    >
      {step === 1 && <StepOneForm onContinue={startOtp} />}
      {step === -1 && <PhoneOtpVerificationForm onSubmit={finishOtp} />}
      {step === 2 && <StepTwoForm onContinue={next} onBack={prev} />}
      {step === 3 && <StepThreeForm onContinue={next} onBack={prev} />}
      {step === 4 && <StepFour onContinue={next} />}
    </SplitScreenLayout>
  );
}

export default SignupForm;
