import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

const Home = () => {
  const location = useLocation();
  useEffect(() => {
    // const saveEvent = async () => {
    // const userId = "12345"; // Replace with real user ID
    axios.post("http://localhost:5000/api/routes/track", {
      user: "raju",
      application: "Apollo diognostics",
      routePath: location.pathname,
      device: "Chrome browser",
      screen: "Home",
      event: "splash screen",
      value: "0",
    });
    // };
    // saveEvent();
  }, []);
  return (
    <div>
      <h1>Home Page</h1>
      <Link to="/profile">Go to Profile</Link>&nbsp;
      <Link to="/route-history">Go to Route History</Link>&nbsp;
      <Link to="/cart">Go to Cart</Link>
    </div>
  );
};

export default Home;
