import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function RegisterPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        try {
            const res = await fetch("http://localhost:5000/api/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username,password }),
            });

            if (!res.ok) {
                const data = await res.json();
                throw new Error(data.message || "Registration failed");
            }

            alert("Registration successful! Please log in.");
            navigate("/login");
        }   catch (err) {
            setError(err.message);
    }
};

return (
    <div style={{ textAlign: "center", marginTop: "5rem" }}>
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
            <input 
                placeholder="Enter username" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            /><br />
            <input 
                type="password"
                placeholder='Enter password' 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            /><br />
            <button type="submit">Register</button>
        </form>
        {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
    );
}

export default RegisterPage;