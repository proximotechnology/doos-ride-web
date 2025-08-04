import signupAsSideImage from "@/assets/signup-as-side-image.png";
import SplitScreenLayout from "@/layout/SplitScreenLayout";
import SignupAsForm from "./SignupAsForm";

function SignupAs() {
  return (
    <SplitScreenLayout imageSrc={signupAsSideImage}>
        <SignupAsForm />
    </SplitScreenLayout>
  );
}

export default SignupAs;
