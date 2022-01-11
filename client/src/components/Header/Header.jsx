import './Header.css'
import { Link } from "react-router-dom";

function Header(props) {
  let user = props.user;
  return <header>
    <Link to="/" target="_blank" rel="noopener noreferrer" ><p>David Verghese's Online Daw</p></Link>
    {user ? <p>Sign Out</p> : <><Link to="/sign-in" target="_blank" rel="noopener noreferrer" ><p>Sign in</p></Link>
      <Link to="/sign-up" target="_blank" rel="noopener noreferrer" ><p>Sign up</p></Link>
    </>}
    <Link to="/blog" target="_blank" rel="noopener noreferrer" >Blog</Link>
  </header>
}
export default Header;