import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

export default function Navbar() {
    const { user, logout } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/login");
    };

    return (
        <nav style={{ display: "flex", gap: "20px", padding: "10px", borderBottom: "1px solid #ccc" }}>
            <Link to="/posts">Home</Link>
            {user && <Link to="/create-post">Create Post</Link>}
            {user ? (
                <>
                    <span>Hello, {user.username}</span>
                    <button onClick={handleLogout}>Logout</button>
                </>
            ) : (
                <>
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                </>
            )}
        </nav>
    );
}

