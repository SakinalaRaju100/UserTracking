import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const Cart = () => {
  const [routes, setRoutes] = useState([]);

  // useEffect(() => {
  //   const fetchRoutes = async () => {
  //     const userId = "12345"; // Replace with actual user ID
  //     const res = await axios.get(`http://localhost:5000/api/routes/${userId}`);
  //     setRoutes(res.data);
  //   };
  //   fetchRoutes();
  // }, []);

  return (
    <div>
      <h1>Cart Page</h1>
      {/* <h2>Visited Routes:</h2>
      <ul>
        {routes.map((route, index) => (
          <li key={index}>{route.routePath}</li>
        ))}
      </ul> */}
      <Link to="/">Go to Home</Link>
      <Link to="/history">Go to Route history</Link> &nbsp;
      <Link to="/profile">Go to Profile</Link>
    </div>
  );
};

export default Cart;
