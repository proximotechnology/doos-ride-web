import { Route } from "react-router-dom";
import getAuthRoutes from "./Auth.Routes";
import { getSettingsRoutes } from "./Settings.Routes";

export default function userRoutes() {
  return (
    <Route path="/user">
      {getAuthRoutes()}
      {getSettingsRoutes()}
    </Route>
  );
}
