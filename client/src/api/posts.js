import axios from "axios";

export const getPostsRequest = async () => await axios.get("/posts");
export const createPostRequest = async (post) =>
	await axios.post("/posts", post);
export const deletePostRequest = async (id) =>
	await axios.delete(`/posts/${id}`);
export const getPostRequest = async (id) => await axios.get(`/posts/${id}`);
