const mongoose = require("mongoose");

const RouteSchema = new mongoose.Schema(
  {
    //   userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    //   routePath: { type: String, required: true },
    //   timestamp: { type: Date, default: Date.now },
  },
  {
    strict: false,
    //  timestamps: true,
    timestamps: {
      currentTime: () => new Date().toISOString(),
    },
  }
);

module.exports = mongoose.model("Route", RouteSchema, "Route");
