import "./App.css";
import React from "react";
// import Header from "./pages/Common/Header";
// import GlobalStyle from "./style-component/Global_style";
// import Container from "./pages/CommonLayer/CommonLayer";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import BoardList from "./pages/BoardList";
import Post from "./pages/Post";
import Posting from "./pages/Posting";
import PostingLayout from "./pages/PostingLayout";
import PostLayout from "./pages/PostLayout";
import Login from "./pages/Login";
import EditPost from "./pages/EditPost";


function App() {
  return (
    <>
      <Router>
        <Routes>
        <Route path="/" element={<Login />} />
          <Route path="/BoardList" element={<BoardList />} />
          <Route path="/Post" element={<Post />} />
          {/* <Route path="/PostLayout" element={<PostLayout/>}/> */}
          <Route path="/Posting" element={<Posting />} />
          {/* <Route path="PostingLayout" element={<PostingLayout/>}/> */}
          <Route path="/edit/:num" element={<EditPost/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
