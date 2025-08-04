import forgetPasswordSideImage from "@/assets/otp-verification-side-image.png";
import SplitScreenLayout from "@/layout/SplitScreenLayout";
import ForgetPasswordForm from "./ForgetPasswordForm";

function ForgetPassword() {
  return (
    <SplitScreenLayout imageSrc={forgetPasswordSideImage}>
      <ForgetPasswordForm />
    </SplitScreenLayout>
  );
}

export default ForgetPassword;
