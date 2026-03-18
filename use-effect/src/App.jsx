import UseEffect from './components/UseEffect'
import PostList from './components/PostList'

import { Routes, Route } from "react-router";
import UserProfile from './components/UserProfile';

function App() {
  return (

    <Routes>
      <Route path="/users/:id" element={<UserProfile />} />
    </Routes>
  
  )
}

export default App

