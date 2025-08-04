import { Route, Routes } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import driverRoutes from "./routers/driver/Driver.Routes";
import userRoutes from "./routers/user/User.Routes";
import Login from "./features/login/Login";
import SignupAs from "./features/signup/SignupAs";
import ForgetPassword from "./features/forget-password/ForgetPassword";
import AccountOtp from "./features/otp-verification/account-otp/AccountOtp";
import CreateNewPassword from "./features/forget-password/createNewPassword/CreateNewPassword";

function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/signup-as" element={<SignupAs />} />
        <Route path="/auth/forget-password" element={<ForgetPassword />} />
        <Route path="/auth/account-otp" element={<AccountOtp />} />
        <Route path="/auth/reset-password" element={<CreateNewPassword />} />
        {driverRoutes()}
        {userRoutes()}
      </Route>
    </Routes>
  );
}

export default App;
