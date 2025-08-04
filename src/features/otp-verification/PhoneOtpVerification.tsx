import otpSideImage from "@/assets/otp-verification-side-image.png";
import SplitScreenLayout from "@/layout/SplitScreenLayout";
import PhoneOtpVerificationForm from "./PhoneOtpVerificationForm";
import { useNavigate } from "react-router-dom";

type TProps = {
  onSubmit?: () => void;
};

function PhoneOtpVerification({ onSubmit }: TProps) {
  const navigation = useNavigate();
  const handleSubmit = () => {
    onSubmit?.();
    navigation("../finish-signup", { replace: true });
  };
  return (
    <SplitScreenLayout imageSrc={otpSideImage}>
      <PhoneOtpVerificationForm onSubmit={handleSubmit} />
    </SplitScreenLayout>
  );
}

export default PhoneOtpVerification;
