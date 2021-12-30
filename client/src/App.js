
import './App.css';
import sequencer from './services/sequencer';
import * as Tone from 'tone'
import InputGrid from "./components/InputGrid/InputGrid"
import { useState } from "react";
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import MobileWarning  from './components/MobileWarning/MobileWarning';
import kickFile from './sounds/drums/kick.wav';
import snareFile from './sounds/drums/snare.wav';
import hihatFile from './sounds/drums/hihat.wav';
import rimshotFile from './sounds/drums/808rimshot.wav';
import highTomFile from './sounds/drums/808hightom.wav';
import lowTomFile from './sounds/drums/808lowtom.wav';
import handclapFile from './sounds/drums/808handclap.wav';
import crashcymbalFile from './sounds/drums/crash-cymbal.wav';

import bassC2File from './sounds/sinebass/sinebass-c2.wav';
import bassB1File from './sounds/sinebass/sinebass-b1.wav';
import bassA1File from './sounds/sinebass/sinebass-a1.wav';
import bassG1File from './sounds/sinebass/sinebass-g1.wav';
import bassF1File from './sounds/sinebass/sinebass-f1.wav';
import bassE1File from './sounds/sinebass/sinebass-e1.wav';
import bassD1File from './sounds/sinebass/sinebass-d1.wav';
import bassC1File from './sounds/sinebass/sinebass-c1.wav';

import leadC5File from './sounds/pipa/pipa-c5.wav';
import leadB4File from './sounds/pipa/pipa-b4.wav';
import leadA4File from './sounds/pipa/pipa-a4.wav';
import leadG4File from './sounds/pipa/pipa-g4.wav';
import leadF4File from './sounds/pipa/pipa-f4.wav';
import leadE4File from './sounds/pipa/pipa-e4.wav';
import leadD4File from './sounds/pipa/pipa-d4.wav';
import leadC4File from './sounds/pipa/pipa-c4.wav';

const drumSoundsArray = [crashcymbalFile, handclapFile, lowTomFile, highTomFile, rimshotFile, hihatFile, snareFile, kickFile];
const bassSoundsArray = [bassC2File,bassB1File,bassA1File,bassG1File,bassF1File,bassE1File,bassD1File,bassC1File];
const leadSoundsArray = [leadC5File,leadB4File,leadA4File,leadG4File,leadF4File,leadE4File,leadD4File,leadC4File];

async function startSequencer() {
  await Tone.start();
  sequencer(drumSoundsArray, 'drums');
  sequencer(bassSoundsArray, 'bass');
  sequencer(leadSoundsArray, 'lead');
}
const noteNamesC1ToC2 = ["C2", "B1", "A1", "G1", "F1", "E1", "D1", "C1"];
const noteNamesC4ToC5 = ["C5", "B4", "A4", "G4", "F4", "E4", "D4", "C4"];

function App() {
  const [startButtonClicked, setStartButtonClicked] = useState(false);
  return (
    <div className="app">
      <Header />
      <MobileWarning/>
      <div className="musicmaker">
        <div className="topbar"><h2>How to Use This</h2><button onClick={() => { if (!startButtonClicked) { startSequencer() };setStartButtonClicked(true)}}>start</button> </div>
        <h3>Guitar</h3>
      <InputGrid noteNamesArray={noteNamesC4ToC5} instrument={"lead"}/>
        <h3>Bass</h3>
        <InputGrid noteNamesArray={noteNamesC1ToC2} instrument={"bass"} />
        <h3>Drums</h3>
      <InputGrid noteNamesArray={noteNamesC1ToC2} instrument={"drums"}/>
      
      
      </div>
      <Footer/>
    </div>
  );
}

export default App;
