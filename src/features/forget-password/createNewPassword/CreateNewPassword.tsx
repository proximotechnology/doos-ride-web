import createNewPasswordSideImage from "@/assets/otp-verification-side-image.png";
import SplitScreenLayout from "@/layout/SplitScreenLayout";
import CreateNewPasswordForm from "./CreateNewPasswordForm";
import { useNavigate } from "react-router-dom";

function CreateNewPassword() {
  const navigate = useNavigate();
  const onSubmit = () => {
    navigate("/auth/reset-password");
  };
  return (
    <SplitScreenLayout imageSrc={createNewPasswordSideImage}>
      <CreateNewPasswordForm onSubmit={onSubmit} />
    </SplitScreenLayout>
  );
}

export default CreateNewPassword;
