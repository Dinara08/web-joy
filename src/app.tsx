import "./app.css";
import Home from "./components/Home.tsx";
import { Routes, Route } from "react-router-dom";
import Posts from "./components/Posts.tsx";
import {Header} from "./components/Header.tsx";

export function App() {

  return (
  <>
  <Header/>
    <Routes>
      <Route path="/" element={<Home/>}>Home</Route>
      <Route path="/posts" element={<Posts/>}>Posts</Route>
    </Routes>
  </>
  );
}
