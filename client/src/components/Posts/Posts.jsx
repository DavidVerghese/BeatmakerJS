import "./Posts.css"
import { useState, useEffect } from "react";
import { getUser } from "../../services/users";
import { getComments } from "../../services/comments"
import Comment from "../Comment/Comment";
import AddComment from "../AddComment/AddComment";
import { Link } from "react-router-dom";

function Posts(props) {
  const [user, setUser] = useState([]);
  const { post_id, created_at, content, siteUser, user_id } = props;
  const [comments, setComments] = useState([]);
  const [seeReplies, setSeeReplies] = useState(false);
  const [addReply, setAddReply] = useState(false);
  let commentCount = 0;
  useEffect(() => {
    const fetchUser = async () => {
      const user = await getUser(user_id);
      setUser(user);
    };
    fetchUser();
  }, [user_id]);
  useEffect(() => {
    const fetchComments = async () => {
      const comments = await getComments();
      setComments(comments);
    };
    
    fetchComments();
  }, []);
  comments.map((index) => index.post_id === post_id ? commentCount++ : null)

    let year = created_at.slice(0, 4);
    let monthNumber = created_at.slice(5, 7);
    let monthsArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let month = monthsArray[parseInt(monthNumber - 1)];
    let day = created_at.slice(8, 10);
  let date = `${month} ${day}, ${year}`
  return (<div className="posts">
    <div className="original-post">
      <div className="profile-pic">
      {user.profile_pic ?   <img src={user.profile_pic} alt="profile" /> : <img src="https://www.nareb.com/site-files/uploads/2017/03/fg-avatar-anonymous-user-retina.png" alt="profile" />}
      </div>
      <div className="original-post-div">
      <div className="username-and-date"> <p><b>{user.username}</b></p><i><p>{date} </p></i></div>
      <div className="post-content">
          <p>{content}</p>
          {siteUser ? <p className="post-interface" onClick={() => { setAddReply(!addReply) }}>Reply</p> : <Link to="/sign-in"><p className="post-interface">Reply</p></Link> }
        
      </div>
      {addReply ? siteUser ? <AddComment post_id={post_id} user_id={siteUser.id}/>:null : null }
      <div className="post-interface"><p onClick={() => { setSeeReplies(!seeReplies) }}>{seeReplies ? commentCount > 0 ? commentCount>1 ? `Hide ${commentCount} replies`: `Hide ${commentCount} reply` :null: commentCount > 0 ? commentCount>1 ? `View ${commentCount} replies`: `View ${commentCount} reply` :null}</p>
        </div>
       
        
       {seeReplies ? comments.map((index, key) => { if (post_id === index.post_id) { return <Comment created_at={index.created_at} key={key} number={commentCount} user_id={index.user_id} content={index.content} /> } else { return null } }) : null}
    
    </div>


   
  </div>
  </div>)
}
export default Posts