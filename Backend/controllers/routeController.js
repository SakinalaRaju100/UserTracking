const Route = require("../models/Route");

const trackRoute = async (req, res) => {
  console.log("req", req.body);
  try {
    const { userId, routePath } = req.body;

    // const route = new Route(req.body);
    // await route.save();
    // return res.status(201).json("activity saved");

    const userRoutes = await Route.find({ userId: userId });
    console.log("userRoutes", userRoutes);
    if (userRoutes.length > 0) {
      const lastRoute = userRoutes.slice(-1);
      console.log("lastRoute", lastRoute);
      console.log("cond", routePath, lastRoute[0]?.routePath);
      if (routePath == lastRoute[0]?.routePath) {
        console.log("last route and current route matched");
        return res.status(201).json("route already saved");
      } else {
        const route = new Route(req.body);
        await route.save();
        return res.status(201).json("old user new route saved");
      }
    } else {
      const route = new Route(req.body);
      await route.save();
      return res.status(200).json("new user route saved");
    }
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

const getUserRoutes = async (req, res) => {
  console.log("get use routes called");

  try {
    const { userId } = req.params;
    const routes = await Route.find({ userId });
    res.status(200).json(routes);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};
const getUserTracks = async (req, res) => {
  console.log("get user tracks called");

  try {
    const { userId } = req.params;
    const routes = await Route.find({ userId }).sort({ timestamp: -1 });
    res.status(200).json(routes);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

module.exports = { trackRoute, getUserRoutes };
