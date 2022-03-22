import express from "express";
import bodyParser from "body-parser";

import courseRoutes from "./routes/courses.js";

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.use("/courses", courseRoutes);
app.get("/", (req, res) => res.send("Welcome to the Courses API!"));
app.all("*", (req, res) =>res.send("You've tried reaching a route that doesn't exist."));

app.listen(PORT, () =>console.log(`Server running on port: http://localhost:${PORT}`));
