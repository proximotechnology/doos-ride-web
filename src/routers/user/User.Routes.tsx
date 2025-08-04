import { Route } from "react-router-dom";
import getAuthRoutes from "./Auth.Routes";

export default function userRoutes() {
  return <Route path="/user">{getAuthRoutes()}</Route>;
}
