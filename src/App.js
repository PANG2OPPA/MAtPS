import "./App.css";
import React from "react";
import { ReactDOM } from "react";
import Header from "./pages/Common/Header";
import GlobalStyle from "./pages/style-components/Global_style";
import Container from "./pages/style-components/Reserve/Reserve-BookingAgree";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BoardList from "./pages/page-components/Post/BoardList";
import Post from "./pages/page-components/Post/Post";
import Posting from "./pages/page-components/Post/Posting";
import StoreLayer from "./pages/page-components/StoreList/StoreLayer";
import StoreListLayout from "./pages/page-components/StoreList/StoreListLayout";
import Home from "./pages/page-components/Randing/Home";

function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/" element={<StoreListLayout />} />
          <Route path="/BoardList" element={<BoardList />} />
          <Route path="/Post" element={<Post />} />
          <Route path="/Posting" element={<Posting />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;