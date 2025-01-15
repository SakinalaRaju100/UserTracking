import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const Profile = () => {
  const [routes, setRoutes] = useState([]);
  const location = useLocation();
  useEffect(() => {
    axios.post("http://localhost:5000/api/routes/track", {
      userId: "raju",
      application: "Apollo diognostics",
      routePath: location.pathname,
      device: "Browser",
      screen: "Profile",
      event: "Profile view",
      value: "0",
    });
  }, []);

  // useEffect(() => {
  //   const fetchRoutes = async () => {
  //     const userId = "12345"; // Replace with actual user ID
  //     const res = await axios.get(`http://localhost:5000/api/routes/${userId}`);
  //     setRoutes(res.data.reverse().slice(1));
  //     // setRoutes(res.data.slice(1));
  //     // setRoutes(res.data);
  //   };
  //   fetchRoutes();
  // }, []);

  return (
    <div>
      <h1>Profile Page</h1>
      <Link to="/">Go to Home</Link> &nbsp;
      <Link to="/history">Go to History</Link> &nbsp;
      <Link to="/cart">Go to Cart</Link>
    </div>
  );
};

export default Profile;
