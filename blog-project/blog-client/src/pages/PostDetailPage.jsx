
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function PostDetailPage() {
    const {id} = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:5000/api/posts/${id}`)
            .then((res) => setPost(res.data))
            .catch((err) => console.error(err))
    }, [id]);

    if (!post) return <p>Loading...</p>;

    return (
        <div>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <small>By: {post.author?.username || 'Unknown'}</small>
            <p>Created at: {new Date(post.createdAt).toLocaleString()}</p>
        </div>
    );
}

export default PostDetailPage;