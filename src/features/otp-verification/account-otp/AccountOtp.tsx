import accountOtpSideImage from "@/assets/otp-verification-side-image.png";
import SplitScreenLayout from "@/layout/SplitScreenLayout";
import AccountOtpForm from "./AccountOtpForm";

function AccountOtp() {
  return (
    <SplitScreenLayout imageSrc={accountOtpSideImage}>
      <AccountOtpForm />
    </SplitScreenLayout>
  );
}

export default AccountOtp;
