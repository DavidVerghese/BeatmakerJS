import './Header.css'
import { Link } from "react-router-dom";
import { useState } from "react";

function Header(props) {
  let user = props.user;
  const [hasUserClickedBlog, setHasUserClickedBlog] = useState(false);
  return <header>
    <Link to="/" target="_blank" rel="noopener noreferrer" ><p>David Verghese's Online Daw</p></Link>
    {user ? <p>Sign Out</p> : (hasUserClickedBlog ? <><Link to="/sign-in" target="_blank" rel="noopener noreferrer" ><p>Sign in</p></Link>
      <Link to="/sign-up" target="_blank" rel="noopener noreferrer" ><p>Sign up</p></Link>
    </> : null)}
    {hasUserClickedBlog ? <Link to="/blog"><p>Blog</p></Link> :  <Link to="/blog" target="_blank" rel="noopener noreferrer"><p onClick={() => { setHasUserClickedBlog(true) }}>Blog</p></Link> }
  </header>
}
export default Header;