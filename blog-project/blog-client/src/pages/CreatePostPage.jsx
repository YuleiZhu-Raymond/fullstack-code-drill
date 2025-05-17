import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

function CreatePostPage() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const { token } = useContext(AuthContext);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        try {
            const res = await fetch("http://localhost:5000/api/posts", {
                method: "POST",
                headers: {
                    "Content-Type" : "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({ title, content }),
            });

            if (!res.ok) {
                const data = await res.json();
                throw new Error(data.message || "Failed to create post");
            }

            alert("Post published successfully!");
            navigate("/posts");
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div style={{ maxWidth: '600px', margin: '40px auto', textAlign: 'center' }}>
            <h2>Create Post</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Enter title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
                /><br />
                <textarea 
                    placeholder="Enter content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    style={{ width: '100%', padding: '8px'}}
                /><br />
                <button type="submit" style={{ marginTop: '12px'}}>Publish</button>
            </form>
        </div>
    );
}


export default CreatePostPage;