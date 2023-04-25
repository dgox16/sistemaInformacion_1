import express from "express";
import morgan from "morgan";
import fileupload from "express-fileupload";
import postsRoutes from "./routes/posts.routes.js";

const app = express();

// Middleware
app.use(express.json());
app.use(
    fileupload({
        useTempFiles: true,
        tempFileDir: "./upload",
    }),
);
app.use(morgan("dev"));

// Routes
app.use(postsRoutes);

export default app;
