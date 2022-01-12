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
    <div className="blog-content">
      <h2>Comments: </h2>
      <em>{posts.length} comments</em>
      <div>
        {user ? <AddPost user={user} /> : <Link to="sign-in"><textarea placeholder="Add a comment..." /></Link>}
      </div>
    
      <div className="posts-section">
         {posts.map((index, key) => <Posts key={key} siteUser={user} created_at={index.created_at} post_id={index.id} content={index.content} user_id={index.user_id} />)}
      </div>
     
    </div>
    
   
    
  </div>
}
export default Blog;