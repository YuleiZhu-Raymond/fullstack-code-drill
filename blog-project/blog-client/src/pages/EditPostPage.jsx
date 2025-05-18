import { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

function EditPostPage() {
    const { id } = useParams();
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const { token } = useContext(AuthContext);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // 拉取原有内容
        fetch(`http://localhost:5000/api/posts/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log("post data:", data);
                console.log("edit id:", id);
                setTitle(data.title);
                setContent(data.content);
                setLoading(false);
            })
            .catch(() => {
                setError("Failed to load original content");
                setLoading(false);
            });
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        try {
            const res = await fetch(`http://localhost:5000/api/posts/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({ title, content }),
            });
            if (!res.ok) {
                const data = await res.json();
                throw new Error(data.message || "Failed to update post");
            }
            alert("Post updated successfully!");
            navigate(`/posts/${id}`);
        } catch (err) {
            setError(err.message);
        }
    };

    if (loading) return <div>Loading...</div>;

    return (
        <div style={{ maxWidth: '600px', margin: '40px auto', textAlign: 'center' }}>
            <h2>Edit Post</h2>
            {error && <div style={{ color: "red" }}>{error}</div>}
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
                /><br />
                <textarea
                    value={content}
                    onChange={e => setContent(e.target.value)}
                    style={{ width: '100%', padding: '8px' }}
                /><br />
                <button type="submit" style={{ marginTop: '12px' }}>Save</button>
            </form>
        </div>
    );
}

export default EditPostPage;