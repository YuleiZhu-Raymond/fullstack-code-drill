import { useState } from "react";

const LoginForm = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [submittedData, setSubmittedData] = useState(null);

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username.trim() === "" || password.trim() === "") {
            alert("Username and Password cannot be empty");
            return;
        }
        setSubmittedData({ username, password });
        setUsername("");
        setPassword("");
    };

    return (
        <div style={{padding: "20px"}}>
            <h2>Login Form</h2>
            <form onSubmit={handleSubmit}>
                <div style={{marginBottom: "10px"}}>
                    <input 
                        type="text" 
                        placeholder="Username" 
                        value={username} 
                        onChange={handleUsernameChange} 
                    />
                </div>
                <div style={{marginBottom: "10px"}}>
                    <input 
                        type="password" 
                        placeholder="Password" 
                        value={password} 
                        onChange={handlePasswordChange} 
                    />
                </div>
                <button type="submit">Login</button>
            </form>

            {submittedData && (
                <div style={{marginTop: "20px"}}>
                    <h3>Submitted Data</h3>
                    <p>Username: {submittedData.username}</p>
                    <p>Password: {submittedData.password}</p>
                </div>
            )}
        </div>
    );
};

export default LoginForm;