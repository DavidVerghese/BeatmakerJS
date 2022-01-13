import './Comment.css'
import { getUser } from "../../services/users";
import { useState, useEffect } from "react";

function Comment(props) {
  const [user, setUser] = useState([]);
  const { created_at, user_id, content } = props;
  let year = created_at.slice(0, 4);
    let monthNumber = created_at.slice(5, 7);
    let monthsArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let month = monthsArray[parseInt(monthNumber - 1)];
    let day = created_at.slice(8, 10);
  let date = `${month} ${day}, ${year}`
  const [profilePic, setProfilePic] = useState("");
  useEffect(() => {
    const fetchUser = async () => {
      const user = await getUser(user_id);
      setUser(user);
      setProfilePic(user.profile_pic);
    };
    fetchUser();
  }, []);
  return <div className="comments">
    <div className="profile-pic">

      {profilePic ?   <img src={profilePic} alt="profile" /> : <img src="https://www.nareb.com/site-files/uploads/2017/03/fg-avatar-anonymous-user-retina.png" alt="profile" />}
    </div>
    <div>
    <div className="username-and-date"> <p><b>{user.username}</b></p><i><p>{date} </p></i></div>
   <p>{content}</p>
    </div>

  </div>
}
export default Comment;