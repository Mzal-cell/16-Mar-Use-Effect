// Routing simply means when the URL changes, the user should see a different page. In React, we can use the react-router-dom library to achieve this.
// npm install react-router-dom

// useParams is a hook that allows us to access the parameters of the current route. For example, if we have a route like /posts/:id, we can use useParams to get the id parameter.

// https://localhost:3000/products/123

import { useParams } from 'react-router-dom';

export default function Products() {
    const { id } = useParams();
    return (
        <div>
            <h2>Product ID: {id}</h2>
        </div>
    );
}

/products/123 -> Product ID: 123