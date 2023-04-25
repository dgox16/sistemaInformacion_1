import { useState, createContext, useContext, useEffect } from "react";
import {
	createPostRequest,
	deletePostRequest,
	getPostRequest,
	getPostsRequest,
} from "../api/posts";

const postsContext = createContext();

export const usePosts = () => {
	const context = useContext(postsContext);
	return context;
};

export const PostProvider = ({ children }) => {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		getPosts();
	}, []);

	const getPosts = async () => {
		const res = await getPostsRequest();
		setPosts(res.data);
	};

	const createPost = async (post) => {
		const postCreated = await createPostRequest(post);
		setPosts([...posts, postCreated.data]);
	};

	const deletePost = async (id) => {
		await deletePostRequest(id);
		setPosts(posts.filter((post) => post._id !== id));
	};

	const getPost = async (id) => {
		const res = await getPostRequest(id);
		return res.data;
	};

	return (
		<postsContext.Provider
			value={{
				posts,
				setPosts,
				getPosts,
				getPost,
				createPost,
				deletePost,
			}}
		>
			{children}
		</postsContext.Provider>
	);
};
