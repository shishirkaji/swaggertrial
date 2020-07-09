const mongoose = require("mongoose");

const db = require("./config.json").mongoUri;
const connectDB = async () => {
  try {
    mongoose.set("useNewUrlParser", true);
    mongoose.set("useFindAndModify", false);
    mongoose.set("useCreateIndex", true);
    await mongoose.connect(db, {
    
      useUnifiedTopology: true,
    });
    console.log("Database connected");
  } catch (err) {
    console.log(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
