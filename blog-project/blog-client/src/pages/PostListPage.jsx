import React, { useEffect, useState } from "react";
import { Link} from "react-router-dom"

function PostListPage() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/api/posts")
            .then((res) => res.json())
            .then((data) => setPosts(data))
            .catch((err) => console.error("Failed to fetch posts:", err));
    }, []);

    return (
        <div style={{ padding: "2rem" }}>
            <h2>Post List Page</h2>
            {posts.length === 0? (
                <p>No posts yet.</p>
            ) : (
                <ul>
                    {posts.map((post) => (
                        <li key={post._id}>
                            <h3>{post.title}</h3>
                            <p>{post.content}</p>
                            <small>By: {post.author?.username || "Unknown"}</small>
                            <h3>
                                <Link to={`/posts/${post._id}`}>{post.title}</Link>
                            </h3>
                        </li>
                    ))}
                </ul>
            )}

        </div>
    );
}

export default PostListPage;