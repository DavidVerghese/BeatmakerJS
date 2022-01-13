import './Home.css';
import MusicMaker  from '../../components/MusicMaker/MusicMaker';
import Modal from 'react-modal';
import { Route, Link } from "react-router-dom";
import Header from '../../components/Header/Header';

Modal.setAppElement('#root');

function Home(props) {
  const { user } = props;
  return (<div className="home">
    <Header user={user} />
    <div id="ready"></div>
    <MusicMaker />
</div>)
}
export default Home