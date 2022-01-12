import "./Posts.css"
import { useState, useEffect } from "react";
import { getUser } from "../../services/users";
import { getComments } from "../../services/comments"
import Comment from "../Comment/Comment";
import AddComment from "../AddComment/AddComment";

function Posts(props) {
  const [user, setUser] = useState([]);
  const { user_id, post_id } = props;
  const siteUser = props.user;
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
    {siteUser ? <AddComment post_id={post_id} user_id={user_id}/>:null}
  </div>)
}
export default Posts