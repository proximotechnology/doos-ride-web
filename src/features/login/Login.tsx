import SplitScreenLayout from "@/layout/SplitScreenLayout";
import LoginForm from "./LoginForm";
import loginSideImage from "@/assets/login-image.png";

function Login() {
  return (
    <SplitScreenLayout imageSrc={loginSideImage}>
      <LoginForm />
    </SplitScreenLayout>
  );
}

export default Login;
