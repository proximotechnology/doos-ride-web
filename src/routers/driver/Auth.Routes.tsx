import Signup from "@/features/signup/driver/Signup";
import { Route } from "react-router-dom";

const getAuthRoutes = () => {
  return (
    <Route path="auth">
      <Route path="signup" element={<Signup />} />
    </Route>
  );
};

export default getAuthRoutes;
