import SignupProvider from "./contexts/SignupContextProvider";
import SignupForm from "./SignupForm";

function Signup() {
  return (
    <SignupProvider>
      <SignupForm />
    </SignupProvider>
  );
}

export default Signup;
