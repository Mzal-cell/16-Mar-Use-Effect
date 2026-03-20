// <a> dont use in React for navigation. It prevents the page from reloading.
// use the Link component from react-router to navigate between pages without reloading the page.

// useNavigate is a hook that allows us to programmatically navigate to a different route. For example, we can use useNavigate to navigate to a different page when a button is clicked.

// 1. Always wrap your app with BrowserRouter
    
// 2. Use Routes and Route to define pages
    
// 3. Use Link instead of `<a>`
    
// 4. Use useParams for dynamic URLs
    
// 5. Use useNavigate for redirects
    
// 6. Always include a 404 route

// import { useNavigate } from "react-router";

// function HomeButton() {
//     const navigate = useNavigate();

//     function goHome() {
//         navigate("/hoome")
//     }

//     return (
//         <button onClick={goHome}>
//             Go Home
//         </button>
//     )
// }

// export default HomeButton;

import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/products">Products</Link></li>
            </ul>
        </nav>
    )
}
