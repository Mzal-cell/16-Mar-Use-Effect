// import UseEffect from './components/UseEffect'
// import PostList from './components/PostList'


import Home from './components/Home';
import About from './components/About';
import Products from './components/Products';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div>
      <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/products" element={<Products />} />
    </Routes>
    </div>
  )
}

export default App

