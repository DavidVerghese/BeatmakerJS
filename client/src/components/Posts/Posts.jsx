import "./Posts.css"
import { useState, useEffect } from "react";
import { getUser } from "../../services/users";
import { getComments } from "../../services/comments"
import Comment from "../Comment/Comment";

function Posts(props) {
  const [user, setUser] = useState([]);
  const user_id = props.user_id;
  const [comments, setComments] = useState([]);
  useEffect(() => {
    const fetchUser = async () => {
      const user = await getUser(user_id);
      setUser(user);
    };
    fetchUser();
  }, []);
  useEffect(() => {
    const fetchComments = async () => {
      const comments = await getComments();
      setComments(comments);
    };
    fetchComments();
  }, []);


  return (<div className="posts">
    <div className="original-post">
    <p>{user.username}:</p>
      <p>{props.content}</p>
    </div>
    {comments.map((index) => props.post_id === index.post_id ? <Comment user_id={index.user_id} content={index.content}/> : null)}
  </div>)
}
export default Posts