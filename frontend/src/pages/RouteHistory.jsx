import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const RouteHistory = () => {
  const [routes, setRoutes] = useState([]);

  useEffect(() => {
    const fetchRoutes = async () => {
      const userId = "12345"; // Replace with actual user ID
      const res = await axios.get(`http://localhost:5000/api/routes/${userId}`);
      // setRoutes(res.data.reverse().slice(1));
      setRoutes(res.data.reverse());
      // setRoutes(res.data.slice(1));
      // setRoutes(res.data);
    };
    fetchRoutes();
  }, []);

  return (
    <div>
      <h1>Route History Page</h1>
      <h2>Last Visited Route at Top:</h2>
      <ul>
        {routes.map((route, index) => (
          <li key={index}>
            {route.routePath} at {new Date(route.updatedAt).toLocaleString()}
          </li>
        ))}
      </ul>
      <Link to="/">Go to Home</Link> &nbsp;
      <Link to="/profile">Go to Profile</Link> &nbsp;
      <Link to="/cart">Go to Cart</Link>
    </div>
  );
};

export default RouteHistory;
