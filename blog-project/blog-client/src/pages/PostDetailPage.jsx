import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../contexts/AuthContext";
import { useContext } from "react";

function PostDetailPage() {
    const {id} = useParams();
    const { user, token } = useContext(AuthContext);
    const [post, setPost] = useState(null);
    const navigate = useNavigate();
    

    useEffect(() => {
        axios.get(`http://localhost:5000/api/posts/${id}`)
            .then((res) => setPost(res.data))
            .catch((err) => console.error(err))
    }, [id]);

    const handleDelete = async () => {
        if (!window.confirm("Are you sure you want to delete this post?")) return;
        try {
            await axios.delete(`http://localhost:5000/api/posts/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            alert("Post deleted successfully");
            navigate("/posts");
        }   catch (err) {
            alert(err.response?.data?.message || "Delete failed");
            console.error("Delete failed", err);
            
        }
    };

    if (!post) return <p>Loading...</p>;

    return (
        <div>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <small>By: {post.author?.username || 'Unknown'}</small>
            <p>Created at: {new Date(post.createdAt).toLocaleString()}</p>

            {user && user.id === post.author._id && (
                <>
                    <button onClick={handleDelete}>Delete Post</button>
                    <button onClick={() => navigate(`/posts/${id}/edit`)}>Edit Post</button>
                </>
            )}
        </div>
    );
}

export default PostDetailPage;