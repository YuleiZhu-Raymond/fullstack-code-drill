import { useState, useEffect } from "react";

function ToDoList() {
    const [todos, setTodos] = useState(null);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        setTimeout(() => {
            setTodos([
                "Buy groceries",
                "Walk the dog",
                "Finish the homework"
            ]);
            setLoading(false);
        }, 2000);
    }, []);

    if (loading) {
        return <div>Loading tasks...</div>
    }

    return (
        <div>
            <h2>My To-Do List</h2>
            <ul>
                {todos.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}

export default ToDoList;