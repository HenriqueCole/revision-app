const express = require("express");
const app = express();

const route = express.Router();

const routes = require("./api/routes");

app.use(router);

route.get("/", (req, res) => {
  res.send("Hello World");
});

route.use("/api", routes);

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
