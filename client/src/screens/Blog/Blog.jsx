import { useState, useEffect } from "react";
import Posts from "../../components/Posts/Posts";

import { getPosts } from "../../services/posts";
import './Blog.css'
function Blog() {
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
    {posts.map((index) => <Posts post_id={index.id} content={index.content} user_id={index.user_id}/>)}
  </div>
}
export default Blog;