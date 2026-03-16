import React, { useState, useEffect } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

useEffect(() => {
    console.log('Count changed:', count);
    // document.title = `You clicked ${count} times`;
}, [count]);

    return (
        <div>
            <p>You clicked {count} times</p>
            <button color='' onClick={() => setCount(count + 1)}>
                (+ve) Increase
            </button>
            <button background color='red' onClick={() => setCount(count - 1)}>
                (-ve) Decrease
            </button>
        </div>
    );
}

export default Counter;