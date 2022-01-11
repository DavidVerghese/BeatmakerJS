import './Header.css'
import { Link } from "react-router-dom";

function Header(props) {
  return  <header><Link to="/" target="_blank" rel="noopener noreferrer" ><p>David Verghese's Online Daw</p></Link><Link to="/blog" target="_blank" rel="noopener noreferrer" >Blog</Link></header>
}
export default Header;