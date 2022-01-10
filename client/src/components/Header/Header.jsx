import './Header.css'
import { Link } from "react-router-dom";

function Header(props) {
  return  <header><p>David Verghese's Online Daw</p><Link to="/blog">Blog</Link></header>
}
export default Header;