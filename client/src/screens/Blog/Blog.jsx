import { useState, useEffect } from "react";

import { getPosts } from "../../services/posts";
import './Blog.css'
function Blog() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const posts = await getPosts();
      console.log(posts);
      setPosts(posts);
    };
    fetchPosts();
  }, []);
  console.log(posts);
  return <div className="blog">
    <h1>Blog</h1>
    {posts.map((index) => <div><p>{index.user_id}</p><p>{index.content}</p></div>)}
  </div>
}
export default Blog;