import express from "express";
import postsRoutes from "./routes/posts.routes.js";
import { connectedDB } from "./db.js";
import { PORT } from "./config.js";

const app = express();
connectedDB();

app.use(postsRoutes);

app.listen(PORT);
console.log("Server running on port ", PORT);
