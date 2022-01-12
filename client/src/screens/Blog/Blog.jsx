import { useState, useEffect } from "react";
import Posts from "../../components/Posts/Posts";
import AddPost from "../../components/AddPost/AddPost";
import { getPosts } from "../../services/posts";
import './Blog.css'
import { Link } from "react-router-dom";

function Blog(props) {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const posts = await getPosts();
      setPosts(posts);
    };
    fetchPosts();
  }, []);
  return <div className="blog">
    <h1>Blog</h1>
    <div className="posts">
      <h2>Posts:</h2>
    {posts.map((index) => <Posts post_id={index.id} content={index.content} user_id={index.user_id} />)}
    </div>
    
    {props.user ? <Link to="add-post"><button>Write a post</button></Link> : null}
    
  </div>
}
export default Blog;