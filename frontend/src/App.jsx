import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Cart from "./pages/Cart";
import RouteHistory from "./pages/History";

// const RouteTracker = () => {
//   const location = useLocation();
//   useEffect(() => {
//     // Skip tracking for history page
//     if (location.pathname === "/history") return;

// const userId = "12345"; // Replace with real user ID
// axios.post("http://localhost:5000/api/routes/track", {
//   userId,
//   routePath: location.pathname,
// });
//   }, [location]);

//   return null;
// };

function App() {
  return (
    <Router>
      {/* <RouteTracker /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/history" element={<RouteHistory />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default App;
