import "./Posts.css"
import { useState, useEffect } from "react";
import { getUser } from "../../services/users";
import { getComments } from "../../services/comments"
import Comment from "../Comment/Comment";
import AddComment from "../AddComment/AddComment";

function Posts(props) {
  const [user, setUser] = useState([]);
  const { post_id, created_at, username, content, siteUser, user_id } = props;
  const [comments, setComments] = useState([]);
  useEffect(() => {
    const fetchUser = async () => {
      const user = await getUser(user_id);
      setUser(user);
    };
    fetchUser();
  }, []);
  console.log(siteUser);
  useEffect(() => {
    const fetchComments = async () => {
      const comments = await getComments();
      setComments(comments);
    };
    fetchComments();
  }, []);
    let year = created_at.slice(0, 4);
    let monthNumber = created_at.slice(5, 7);
    let monthsArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let month = monthsArray[parseInt(monthNumber - 1)];
    let day = created_at.slice(8, 10);
    let date = `${month} ${day}, ${year}`
  return (<div className="posts">
    <div className="original-post">
      <p>Post number: {post_id}</p>
      <p>Created: {date} </p>
    <p>{user.username}:</p>
      <p>{content}</p>
    </div>
    {comments.map((index, key) => post_id === index.post_id ? <Comment created_at={index.created_at} key={key} user_id={index.user_id} content={index.content}/> : null)}
    {siteUser ? <AddComment post_id={post_id} user_id={user_id}/>:null}
  </div>)
}
export default Posts