import { useState, useEffect } from "react";
import Posts from "../../components/Posts/Posts";
import AddPost from "../../components/AddPost/AddPost";
import BlogHeader from "../../components/BlogHeader/BlogHeader";
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
  const { user } = props;
  return <div className="blog">
    <BlogHeader user={user}/>
    <h1>Blog</h1>
    <div className="posts">
    {user ? <Link to="add-post"><button>Write a post</button></Link> : null}
      <h2>Posts:</h2>
      {posts.map((index, key) => <Posts key={key} user={user} post_id={index.id} content={index.content} user_id={index.user_id} />)}
    </div>
    
   
    
  </div>
}
export default Blog;