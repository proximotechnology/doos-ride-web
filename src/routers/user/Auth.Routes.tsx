import PhoneOtpVerification from "@/features/otp-verification/PhoneOtpVerification";
import FinishSignup from "@/features/signup/user/FinishSignup";
import SignupUser from "@/features/signup/user/SignupUser";
import { Route } from "react-router-dom";

export default function getAuthRoutes() {
  return (
    <Route path="auth">
      <Route path="signup" element={<SignupUser />} />
      <Route path="phone-otp" element={<PhoneOtpVerification />} />
      <Route path="finish-signup" element={<FinishSignup />} />
    </Route>
  );
}
