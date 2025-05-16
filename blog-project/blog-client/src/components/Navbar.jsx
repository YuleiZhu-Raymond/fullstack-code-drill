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
        <nav style={{ 
            display: "flex", 
            justifyContent: "space-between", 
            alignItems: "center",
            padding: "10px 20px", 
            borderBottom: "1px solid #ccc" 
            }}
        >
            <div>
                <Link to="/posts">Home</Link>
                {user && <Link to="/create-post">Create Post</Link>}
            </div>
            
            <div style={{ display: "flex", gap: "15px", alignItems: "center" }}>
                {user ? (
                    <>
                        <span>👋Hello, <strong>{user.username}</strong></span>
                        <button onClick={handleLogout}>Logout</button>
                    </>
                ) : (
                    <>
                        <Link to="/login">Login</Link>
                        <Link to="/register">Register</Link>
                    </>
                )}
            </div>
        </nav>
    );
}

