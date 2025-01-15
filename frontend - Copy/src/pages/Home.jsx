import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <Link to="/profile">Go to Profile</Link>&nbsp;
      <Link to="/history">Go to Route History</Link>&nbsp;
      <Link to="/cart">Go to Cart</Link>
    </div>
  );
};

export default Home;
