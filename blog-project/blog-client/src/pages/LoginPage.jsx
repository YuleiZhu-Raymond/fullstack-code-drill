import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch('http://localhost:5000/api/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json'},
                body: JSON.stringify({ username, password }),
            });

            const data = await res.json();
            if (res.ok) {
                localStorage.setItem('token', data.token);
                navigate('/posts');
            } else {
                setError(data.message || 'Login failed');
            }
        } catch (err) {
            setError('Network error');
        }
    };

    return (
        <div>
            <h2>Login</h2>
            {error && <p style={{ color: 'red'}}>{error}</p>}
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                /><br />
                <input 
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                /><br />
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default LoginPage;