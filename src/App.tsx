import { Route, Routes } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import getAuthRoutes from "./routers/Auth.Routes";

function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>{getAuthRoutes()}</Route>
    </Routes>
  );
}

export default App;
