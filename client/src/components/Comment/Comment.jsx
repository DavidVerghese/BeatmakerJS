import './Comment.css'
import { getUser } from "../../services/users";
import { useState, useEffect } from "react";

function Comment(props) {
  const [user, setUser] = useState([]);
  useEffect(() => {
    const fetchUser = async () => {
      const user = await getUser(props.user_id);
      setUser(user);
    };
    fetchUser();
  }, []);
  return <div className="comments"><p>{user.username}:</p><p>{props.content}</p></div>
}
export default Comment;