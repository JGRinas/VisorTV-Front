import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PublicRoute from "./routes/public-routes";
import { Login } from "./modules/auth/presentation/views";
import PrivateRoute from "./routes/private-routes";
import { Home } from "./modules/home/presentation/views";
import "./styles/global.css";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Ruta pública general */}
        <Route path="/" element={<Home />} />
        {/* Rutas públicas */}
        <Route path="/access-to-dashboard" element={<PublicRoute />}>
          <Route path="login" element={<Login />} />
        </Route>

        {/* Rutas privadas */}
        <Route path="/dashboard" element={<PrivateRoute />}>
          <Route path="dashboard" element={<></>} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
