import toast from "react-hot-toast";
import { usePosts } from "../context/postsContext";
import { useNavigate } from "react-router-dom";

export function PostCard({ post }) {
	const { deletePost } = usePosts();
	const navigate = useNavigate();

	const handleDelete = (id) => {
		toast(
			(t) => (
				<div>
					<p className="text-white text-center">
						Do you want to delete this post with ID:
						<strong>{id}</strong>?
					</p>
					<div className="flex justify-center">
						<button
							onClick={() => {
								deletePost(id);
								toast.dismiss(t.id);
							}}
							className="bg-red-500 hover:bg-red-400 px-3 py-2 text-white rounded-sm mx-2"
						>
							Delete
						</button>
						<button
							onClick={() => toast.dismiss(t.id)}
							className="bg-slate-400 hover:bg-slate-500 px-3 py-2 text-white rounded-sm mx-2"
						>
							Cancel
						</button>
					</div>
				</div>
			),
			{ style: { background: "#202020" } },
		);
	};

	return (
		<div
			className="bg-zinc-800 text-white rounded-sm shadow-black shadow-md hover:bg-zinc-600 hover:cursor-pointer"
			onClick={() => navigate(`posts/${post._id}`)}
		>
			<div className="px-4 py-7">
				<div className="flex justify-between">
					<h1>{post.title}</h1>
					<button
						onClick={() => handleDelete(post._id)}
						className="bg-red-600 text-sm rounded-sm px-2 py-1"
					>
						Delete
					</button>
				</div>
				<p>{post.description}</p>
			</div>
		</div>
	);
}
