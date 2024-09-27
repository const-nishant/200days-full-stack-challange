import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import Sidebar from "../components/Sidebar.jsx";
import CreatePost from "../components/CreatePost.jsx";
import PostList from "../components/PostList.jsx";
import PostsListProvider from "../store/posts-list-store.jsx";
import { useState } from "react";
import "./App.css";
import { Outlet } from "react-router-dom";

function App() {
  const [SelectedTab, setSelectedTab] = useState("Home");
  return (
    <PostsListProvider>
      <div className="app-container">
        <Sidebar SelectedTab={SelectedTab} setSelectedTab={setSelectedTab} />
        <div className="content">
          <Header />
          {/* {SelectedTab === "Home" ? <PostList /> : <CreatePost />} */}
          <Outlet/>
          <Footer />
        </div>
      </div>
    </PostsListProvider>
  );
}

export default App;
