import signupUserSideImage from "@/assets/signup-user-side-image.png";
import SplitScreenLayout from "@/layout/SplitScreenLayout";
import SignupUserForm from "./SignupUserForm";

function SignupUser() {
  return (
    <SplitScreenLayout imageSrc={signupUserSideImage}>
      <SignupUserForm />
    </SplitScreenLayout>
  );
}

export default SignupUser;
