import createnNewPasswordSideImage from "@/assets/otp-verification-side-image.png";
import SplitScreenLayout from "@/layout/SplitScreenLayout";
import CreateNewPasswordForm from "./CreateNewPasswordForm";

function CreateNewPassword() {
  return (
    <SplitScreenLayout imageSrc={createnNewPasswordSideImage}>
      <CreateNewPasswordForm />
    </SplitScreenLayout>
  );
}

export default CreateNewPassword;
