import Post from "../models/Post.js";
import { deleteImage, uploadImage } from "../libs/cloudinary.js";
import fs from "fs-extra";

export const getPosts = async (req, res) => {
    try {
        const posts = await Post.find();
        res.send(posts);
    } catch (error) {
        console.error(error.message);
        return res.status(500).json({ message: error.message });
    }
};

export const savePosts = async (req, res) => {
    try {
        const { title, description } = req.body;
        let image;

        if (req.files?.image) {
            const result = await uploadImage(req.files.image.tempFilePath);
            await fs.remove(req.files.image.tempFilePath);
            image = {
                url: result.secure_url,
                public_id: result.public_id,
            };
        }
        const newPost = new Post({ title, description, image });
        await newPost.save();
        return res.json(newPost);
    } catch (error) {
        console.error(error.message);
        return res.status(500).json({ message: error.message });
    }
};

export const updatePost = async (req, res) => {
    try {
        const modifiedPost = await Post.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true },
        );
        return res.json(modifiedPost);
    } catch (error) {
        console.error(error.message);
        return res.status(500).json({ message: error.message });
    }
};

export const deletedPost = async (req, res) => {
    try {
        const deletedPost = await Post.findByIdAndDelete(req.params.id);
        if (!deletedPost) return res.sendStatus(404);

        if (deletedPost.image.public_id) {
            await deleteImage(deletedPost.image.public_id);
        }

        return res.sendStatus(204);
    } catch (error) {
        console.error(error.message);
        return res.status(500).json({ message: error.message });
    }
};

export const getPost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        res.json(post);
    } catch (error) {
        console.error(error.message);
        return res.status(500).json({ message: error.message });
    }
};
