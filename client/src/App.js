
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import MobileWarning from './components/MobileWarning/MobileWarning';
import MusicMaker  from './components/MusicMaker/MusicMaker';
import Modal from 'react-modal';
import { getPosts } from "./services/posts";
import { useState, useEffect } from "react";

Modal.setAppElement('#root');

function App() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const posts = await getPosts();
      setPosts(posts);
    };
    fetchPosts();
  }, );

  return (
    <div className="app">
      <Header/>
      <MobileWarning/>
      <MusicMaker/>
      <Footer/>
    </div>
  );
}

export default App;
