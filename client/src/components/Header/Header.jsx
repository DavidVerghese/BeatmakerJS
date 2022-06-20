import './Header.css'
import { Link } from "react-router-dom";

function Header() {

  return <header>
    <Link to="/" ><p>Box Beats</p></Link>
    <Link to="/blog"target="_blank" rel="noopener noreferrer" >Blog</Link>
  </header>
}
export default Header;