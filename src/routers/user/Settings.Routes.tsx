import ChangePassword from "@/features/settings/profile/change-password/ChangePassword";
import Profile from "@/features/settings/profile/Profile";
import Settings from "@/features/settings/Settings";
import { Route } from "react-router-dom";

export const getSettingsRoutes = () => {
  return (
    <Route path="settings">
      <Route index element={<Settings />} />
      <Route path="profile">
        <Route index element={<Profile />} />
        <Route path="change-password" element={<ChangePassword />} />
      </Route>
    </Route>
  );
};
