import React, { useState } from "react";

function CreatePostPage() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Create post:', { title, content });
        // TODO: Implement actual post creation
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