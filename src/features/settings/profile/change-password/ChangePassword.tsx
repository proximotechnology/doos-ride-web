import SplitScreenLayout from "@/layout/SplitScreenLayout";
import createNewPasswordSideImage from "@/assets/otp-verification-side-image.png";
import { useState } from "react";
import CreateNewPasswordForm from "@/features/forget-password/createNewPassword/CreateNewPasswordForm";
import AccountOtpForm from "@/features/otp-verification/account-otp/AccountOtpForm";

function ChangePassword() {
  const [isOtpDone, setIsOtpDone] = useState(false);
  const handleOtpDone = () => {
    setIsOtpDone(true);
  };

  return (
    <SplitScreenLayout imageSrc={createNewPasswordSideImage}>
      {!isOtpDone && <AccountOtpForm />}
      {isOtpDone && <CreateNewPasswordForm />}
    </SplitScreenLayout>
  );
}

export default ChangePassword;
