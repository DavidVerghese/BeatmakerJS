import './Home.css';
import MobileWarning from '../../components/MobileWarning/MobileWarning';
import MusicMaker  from '../../components/MusicMaker/MusicMaker';
import Modal from 'react-modal';
import { Route, Link } from "react-router-dom";

Modal.setAppElement('#root');

function Home(props) {
  const { setMusicMakerStarted } = props;
  return (<div className="home">
  <MobileWarning/>
    <MusicMaker setMusicMakerStarted={setMusicMakerStarted} />
</div>)
}
export default Home