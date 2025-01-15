import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

const Home = () => {
  const location = useLocation();
  useEffect(() => {
    axios.post("http://localhost:5000/api/routes/track", {
      userId: "raju",
      application: "Apollo diognostics",
      routePath: location.pathname,
      device: "browser",
      screen: "Home",
      event: "splash screen",
      value: "0",
    });
  }, []);
  return (
    <div>
      <h1>Home Page</h1>
      <Link to="/profile">Go to Profile</Link>&nbsp;
      <Link to="/history">Go to History</Link>&nbsp;
      <Link to="/cart">Go to Cart</Link>
    </div>
  );
};

export default Home;
