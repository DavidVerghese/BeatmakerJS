import './Header.css'
import { Link } from "react-router-dom";

function Header(props) {
  const { user, musicMakerStarted } = props;

  return <header>
    {musicMakerStarted ? <><Link to="/"><p>David Verghese's Online Daw</p></Link>
    {user ?  <Link to="/sign-out" ><p>Sign Out</p></Link> : <><Link to="/sign-in" ><p>Sign in</p></Link>
      <Link to="/sign-up" ><p>Sign up</p></Link>
    </>}
    <Link to="/blog" >Blog</Link></>: <><Link to="/"><p>David Verghese's Online Daw</p></Link>
    {user ?  <Link to="/sign-out" target="_blank" rel="noopener noreferrer" ><p>Sign Out</p></Link> : <><Link to="/sign-in" target="_blank" rel="noopener noreferrer"><p>Sign in</p></Link>
      <Link to="/sign-up" target="_blank" rel="noopener noreferrer"><p>Sign up</p></Link>
    </>}
    <Link to="/blog" target="_blank" rel="noopener noreferrer">Blog</Link></>}
    
  </header>
}
export default Header;