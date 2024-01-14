import express from "express";
import cors from "cors";
import UserRoute from "./routes/UserRoute.js";
import CarRoute from "./routes/CarRoute.js";
import TransactRoute from "./routes/TransactRoute.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(UserRoute);
app.use(CarRoute);
app.use(TransactRoute);

app.listen(3000, () => console.log("Server running on port 3000"));
