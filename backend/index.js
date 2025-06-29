import express from "express";
import dotenv from "dotenv";
import { sequelize } from "./src/database/index.js"; // Adjust the path as necessary
import { userRouter } from "./src/route/user/userRoute.js"; // Adjust the path as necessary

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use("/api/user", userRouter);

app.get("/", (req, res) => {
  res.send("API is running");
});

sequelize
  .authenticate()
  .then(() => console.log("Database connected..."))
  .catch((err) => console.error("Database connection error:", err));

app.listen(port, async () => {
  console.log(`Server running on port ${port}`);
});
