const express = require("express");
const userRoutes = require("./src/users/routes/routes");
const app = express();
const port = 8080;

app.use(express.json())

app.get("/", (req, res) => {
  res.send("hello");
});

app.use("/api/v1/users", userRoutes);

app.listen(port, () => {
  console.log(`port: ${port} running...`);
});
