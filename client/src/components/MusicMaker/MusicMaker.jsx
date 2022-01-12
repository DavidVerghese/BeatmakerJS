import './MusicMaker.css';
import sequencer from '../../services/sequencer';
import * as Tone from 'tone'
import InputGrid from "../InputGrid/InputGrid"
import { useState } from "react";
import Modal from 'react-modal';
import YoutubeModal from '../YoutubeModal/YoutubeModal';
import { Link } from 'react-router-dom';
import kickFile from '../../sounds/drums/kick.wav';
import snareFile from '../../sounds/drums/snare.wav';
import hihatFile from '../../sounds/drums/hihat.wav';
import rimshotFile from '../../sounds/drums/808rimshot.wav';
import highTomFile from '../../sounds/drums/808hightom.wav';
import lowTomFile from '../../sounds/drums/808lowtom.wav';
import handclapFile from '../../sounds/drums/808handclap.wav';
import crashcymbalFile from '../../sounds/drums/crash-cymbal.wav';

import bassC2File from '../../sounds/sinebass/sinebass-c2.wav';
import bassB1File from '../../sounds/sinebass/sinebass-b1.wav';
import bassA1File from '../../sounds/sinebass/sinebass-a1.wav';
import bassG1File from '../../sounds/sinebass/sinebass-g1.wav';
import bassF1File from '../../sounds/sinebass/sinebass-f1.wav';
import bassE1File from '../../sounds/sinebass/sinebass-e1.wav';
import bassD1File from '../../sounds/sinebass/sinebass-d1.wav';
import bassC1File from '../../sounds/sinebass/sinebass-c1.wav';

import leadC5File from '../../sounds/pipa/pipa-c5.wav';
import leadB4File from '../../sounds/pipa/pipa-b4.wav';
import leadA4File from '../../sounds/pipa/pipa-a4.wav';
import leadG4File from '../../sounds/pipa/pipa-g4.wav';
import leadF4File from '../../sounds/pipa/pipa-f4.wav';
import leadE4File from '../../sounds/pipa/pipa-e4.wav';
import leadD4File from '../../sounds/pipa/pipa-d4.wav';
import leadC4File from '../../sounds/pipa/pipa-c4.wav';

Modal.setAppElement('#root');

const drumSoundsArray = [crashcymbalFile, handclapFile, lowTomFile, highTomFile, rimshotFile, hihatFile, snareFile, kickFile];
const bassSoundsArray = [bassC2File,bassB1File,bassA1File,bassG1File,bassF1File,bassE1File,bassD1File,bassC1File];
const leadSoundsArray = [leadC5File, leadB4File, leadA4File, leadG4File, leadF4File, leadE4File, leadD4File, leadC4File];

async function startSequencer() {
  await Tone.start();
  sequencer(drumSoundsArray, 'drums');
  sequencer(bassSoundsArray, 'bass');
  sequencer(leadSoundsArray, 'lead');
}
const noteNamesC1ToC2 = ["C2", "B1", "A1", "G1", "F1", "E1", "D1", "C1"];
const noteNamesC4ToC5 = ["C5", "B4", "A4", "G4", "F4", "E4", "D4", "C4"];

function MusicMaker(props) {
  const [startButtonClicked, setStartButtonClicked] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [refresh, setRefresh] = useState(false);
  if (startButtonClicked) {
    return (<div className="musicmaker">
      <div className="topbar"><button id="how-to-use" onClick={() => setModalIsOpen(true)}>How to Use This</button><button id="stop" onClick={() => { window.location.reload(false); }}>Stop</button></div>
      <YoutubeModal modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} />
      <h3>Guitar</h3>
      <InputGrid noteNamesArray={noteNamesC4ToC5} instrument={"lead"} />
      <h3>Bass</h3>
      <InputGrid noteNamesArray={noteNamesC1ToC2} instrument={"bass"} />
      <h3>Drums</h3>
      <InputGrid noteNamesArray={noteNamesC1ToC2} instrument={"drums"} />
    </div>)
  }
  else {
    return (<div>
      <div className="intro">
      <div>
          <h1>Ready to make music?</h1>
          <p>Your complete online workstation for producing music</p>
      <button onClick={() => { if (!startButtonClicked) { startSequencer() }; setStartButtonClicked(true);}}>Click to Enter</button>
      </div>
      <img src="https://images.unsplash.com/photo-1508081444780-e2ea2f0b4754?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8ZGVhbnxlbnwwfHwwfHw%3D&w=1000&q=80" alt="guitar"/>
      </div>
      <div className="intro-b">
        
        <div className="intro-b-text">
          <h2>Music making is what we do</h2>
        <p>Check our blog to see insights and tips from fellow users of this site. Welcome to a international community of dedicated and inspired musicmakers and content creators.</p>
        <Link to="/blog"target="_blank" rel="noopener noreferrer" ><button>Visit the Blog</button></Link>
        </div>
        
        <img alt="accordionist" src="https://images.unsplash.com/photo-1593122444709-8f312cc22e88?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" />
      </div>
      <div className="intro-c">
        <div className="intro-c-text"><h2>The Online Daw requires no prior musical experience or background. If you have ever dreamed of making music, but never had the chance, this app is for you.</h2></div>
        <a href="#ready"><button><p>Get started</p></button></a>
      </div>
      <h1 id="contact-h1">Get in contact with me: </h1>
      
    </div>)
  }
}
  
export default MusicMaker;