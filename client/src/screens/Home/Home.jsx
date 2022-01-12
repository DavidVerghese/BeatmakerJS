import './Home.css';
import MobileWarning from '../../components/MobileWarning/MobileWarning';
import MusicMaker  from '../../components/MusicMaker/MusicMaker';
import Modal from 'react-modal';
import { Route, Link } from "react-router-dom";

Modal.setAppElement('#root');

function Home(props) {
  return (<div className="home">
  <MobileWarning/>
    <MusicMaker />
</div>)
}
export default Home