import { Route } from "react-router-dom";
import getAuthRoutes from "./Auth.Routes";

export default function driverRoutes() {
  return <Route path="/driver">{getAuthRoutes()}</Route>;
}
