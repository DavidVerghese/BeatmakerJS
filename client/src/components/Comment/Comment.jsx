import './Comment.css'
import { getUser } from "../../services/users";
import { useState, useEffect } from "react";

function Comment(props) {
  const [user, setUser] = useState([]);
  const { created_at,user_id, content } = props;
  let year = created_at.slice(0, 4);
    let monthNumber = created_at.slice(5, 7);
    let monthsArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let month = monthsArray[parseInt(monthNumber - 1)];
    let day = created_at.slice(8, 10);
  let date = `${month} ${day}, ${year}`
  
  useEffect(() => {
    const fetchUser = async () => {
      const user = await getUser(user_id);
      setUser(user);
    };
    fetchUser();
  }, []);
  return <div className="comments"><p>{date}</p><p>{user.username}:</p><p>{content}</p></div>
}
export default Comment;