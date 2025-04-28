import { useState, useEffect } from "react";

function Counter() {
    const [count, setCount ] = useState(0);

    const handleClick = () => {
        setCount(count + 1);
    };

    useEffect(() => {
        console.log(`Count changed: ${count}`);
    }, [count]);

    return (
        <div>
            <h2>Count: {count}</h2>
            <button onClick={handleClick}>Increment</button>
        </div>
    );
}

export default Counter