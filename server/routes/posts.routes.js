import { Router } from "express";
import {
    deletedPost,
    getPost,
    getPosts,
    savePosts,
    updatePost,
} from "../controllers/posts.controller.js";

const router = Router();

router.get("/posts", getPosts);

router.post("/posts", savePosts);

router.delete("/posts/:id", deletedPost);

router.put("/posts/:id", updatePost);

router.get("/posts/:id", getPost);

export default router;
