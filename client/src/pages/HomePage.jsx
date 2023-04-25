import { usePosts } from "../context/postsContext";
import { VscEmptyWindow } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { PostCard } from "../components/PostCard";

export function HomePage() {
    const { posts } = usePosts();

    if (posts.length === 0) {
        return (
            <div className="text-white flex flex-col justify-center items-center">
                <VscEmptyWindow className="w-48 h-48" />
                <h1>Here are not posts</h1>
            </div>
        );
    }

    return (
        <div className="text-white">
            <Link to="/new">Create new post</Link>
            <div className="grid grid-cols-3 gap-2">
                {posts.map((post) => (
                    <PostCard post={post} key={post._id} />
                ))}
            </div>
        </div>
    );
}
