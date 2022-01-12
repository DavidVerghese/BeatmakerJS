import './Home.css';
import MobileWarning from '../../components/MobileWarning/MobileWarning';
import MusicMaker  from '../../components/MusicMaker/MusicMaker';
import Modal from 'react-modal';
import { Route, Link } from "react-router-dom";
import Header from '../../components/Header/Header';

Modal.setAppElement('#root');

function Home(props) {
  const { user } = props;
  return (<div className="home">
     <Header user={user}/>
  <MobileWarning/>
    <MusicMaker />
</div>)
}
export default Home