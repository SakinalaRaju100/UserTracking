import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const RouteHistory = () => {
  const [routes, setRoutes] = useState([]);
  const [filteredRoutes, setFilteredRoutes] = useState([]);
  const [selectedScreen, setSelectedScreen] = useState("all");

  useEffect(() => {
    const fetchRoutes = async () => {
      const userId = "raju";
      const res = await axios.get(`http://localhost:5000/api/routes/${userId}`);
      const routeData = res.data.reverse();
      setRoutes(routeData);
      setFilteredRoutes(routeData);
    };
    fetchRoutes();
  }, []);

  const handleScreenFilter = (event) => {
    const screen = event.target.value;
    setSelectedScreen(screen);

    if (screen === "all") {
      setFilteredRoutes(routes);
    } else {
      setFilteredRoutes(routes.filter((route) => route.screen === screen));
    }
  };

  const uniqueScreens = [...new Set(routes.map((route) => route.screen))];

  return (
    <div>
      <h1>History Page</h1>
      <h2>Last Visited History at Top:</h2>
      <div style={{ marginBottom: "20px" }}>
        <label htmlFor="screenFilter">Filter by Screen: </label>
        <select
          id="screenFilter"
          value={selectedScreen}
          onChange={handleScreenFilter}
          style={{ padding: "5px", marginLeft: "10px" }}
        >
          <option value="all">All Screens</option>
          {uniqueScreens.map((screen) => (
            <option key={screen} value={screen}>
              {screen}
            </option>
          ))}
        </select>
      </div>
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          marginBottom: "20px",
        }}
      >
        <thead>
          <tr style={{ backgroundColor: "#f2f2f2" }}>
            <th
              style={{
                padding: "12px",
                border: "1px solid #ddd",
                textAlign: "left",
              }}
            >
              User ID
            </th>
            <th
              style={{
                padding: "12px",
                border: "1px solid #ddd",
                textAlign: "left",
              }}
            >
              Route Path
            </th>
            <th
              style={{
                padding: "12px",
                border: "1px solid #ddd",
                textAlign: "left",
              }}
            >
              Screen
            </th>
            <th
              style={{
                padding: "12px",
                border: "1px solid #ddd",
                textAlign: "left",
              }}
            >
              Event
            </th>
            <th
              style={{
                padding: "12px",
                border: "1px solid #ddd",
                textAlign: "left",
              }}
            >
              Device
            </th>
            <th
              style={{
                padding: "12px",
                border: "1px solid #ddd",
                textAlign: "left",
              }}
            >
              Timestamp
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredRoutes.map((route, index) => (
            <tr key={index}>
              <td style={{ padding: "12px", border: "1px solid #ddd" }}>
                {route.userId}
              </td>
              <td style={{ padding: "12px", border: "1px solid #ddd" }}>
                {route.routePath}
              </td>
              <td style={{ padding: "12px", border: "1px solid #ddd" }}>
                {route.screen}
              </td>
              <td style={{ padding: "12px", border: "1px solid #ddd" }}>
                {route.event}
              </td>
              <td style={{ padding: "12px", border: "1px solid #ddd" }}>
                {route.device}
              </td>
              <td style={{ padding: "12px", border: "1px solid #ddd" }}>
                {new Date(route.updatedAt).toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to="/">Go to Home</Link> &nbsp;
      <Link to="/profile">Go to Profile</Link> &nbsp;
      <Link to="/cart">Go to Cart</Link>
    </div>
  );
};

export default RouteHistory;
