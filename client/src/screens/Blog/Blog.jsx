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
  const firstToPost = function(){
    return (<div className="first-to-post">
      <p>^ Be the first person to write a comment</p>
      <img src="https://media3.giphy.com/media/26AHONQ79FdWZhAI0/giphy.gif?cid=ecf05e472l3qr8om3koerbaubaq3wgjjphjhwzskkr1clbwh&rid=giphy.gif&ct=g" alt="typing" />
    </div>)
   
  }
  const { user } = props;
  return <div className="blog">
    <BlogHeader user={user}/>
    <h1>Blog</h1>
    <div className="blog-content">
      {posts.length === 1 ? <p><em>1 comment</em></p>: <em>{posts.length} comments</em>}
     
      <div>
        {user ? <AddPost user={user} /> : <Link to="sign-in"><textarea placeholder="Add a comment..." /></Link>}
      </div>
    
      <div className="posts-section">
        {posts.length > 0 ? posts.map((index, key) => <Posts key={key} siteUser={user} created_at={index.created_at} post_id={index.id} content={index.content} user_id={index.user_id} />) : firstToPost()}
         
      </div>
     
    </div>
    
   
    
  </div>
}
export default Blog;