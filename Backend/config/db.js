const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://sakinalaraju100:ObBamLOL3fm9X16z@cluster0.4bvgg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
      {
        // useNewUrlParser: true,
        // useUnifiedTopology: true,
      }
    );
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
