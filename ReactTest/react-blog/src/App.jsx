import "./App.css";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import PostDetail from "./pages/PostDetail";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router } from "react-router-dom"; 

function App() {
  return (
    <Router> 
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:postId" element={<PostDetail />} />
      </Routes>
    </>
    </Router>
  );
}

export default App;
