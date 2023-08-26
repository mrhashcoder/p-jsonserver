const app = require("./app");
const dotenv = require("dotenv");

// Setting up Env Variables
dotenv.config();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;
console.log(MONGO_URI);

const server = app.listen(PORT, () => {
  console.log("SERVER is listening on port : " + PORT);
});
