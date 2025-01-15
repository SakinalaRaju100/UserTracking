import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const Profile = () => {
  const [routes, setRoutes] = useState([]);

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
      <Link to="/route-history">Go to Route history</Link> &nbsp;
      <Link to="/cart">Go to Cart</Link>
    </div>
  );
};

export default Profile;
