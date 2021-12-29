
import './App.css';
import sequencer from './services/sequencer';
import * as Tone from 'tone'
import InputGrid from "./components/inputGrid"
import { useState } from "react";
import Footer from './components/Footer/Footer';
import kickFile from './sounds/drums/kick.wav';
import snareFile from './sounds/drums/snare.wav';
import hihatFile from './sounds/drums/hihat.wav';
import rimshotFile from './sounds/drums/808rimshot.wav';
import highTomFile from './sounds/drums/808hightom.wav';
import lowTomFile from './sounds/drums/808lowtom.wav';
import handclapFile from './sounds/drums/808handclap.wav';
import crashcymbalFile from './sounds/drums/crash-cymbal.wav';

import bassC2File from './sounds/bass/bass-c2.wav';
import bassB1File from './sounds/bass/bass-b1.wav';
import bassA1File from './sounds/bass/bass-a1.wav';
import bassG1File from './sounds/bass/bass-g1.wav';
import bassF1File from './sounds/bass/bass-f1.wav';
import bassE1File from './sounds/bass/bass-e1.wav';
import bassD1File from './sounds/bass/bass-d1.wav';
import bassC1File from './sounds/bass/bass-c1.wav';

import violinC5File from './sounds/violin/violin-c5.wav';
import violinB4File from './sounds/violin/violin-b4.wav';
import violinA4File from './sounds/violin/violin-a4.wav';
import violinG4File from './sounds/violin/violin-g4.wav';
import violinF4File from './sounds/violin/violin-f4.wav';
import violinE4File from './sounds/violin/violin-e4.wav';
import violinD4File from './sounds/violin/violin-d4.wav';
import violinC4File from './sounds/violin/violin-c4.wav';

const drumSoundsArray = [kickFile, snareFile, hihatFile, rimshotFile, highTomFile, lowTomFile, handclapFile, crashcymbalFile]
const bassSoundsArray = [bassC2File,bassB1File,bassA1File,bassG1File,bassF1File,bassE1File,bassD1File,bassC1File];
const violinSoundsArray = [violinC5File,violinB4File,violinA4File,violinG4File,violinF4File,violinE4File,violinD4File,violinC4File];

async function startSequencer() {
  await Tone.start();
  sequencer(drumSoundsArray, 'drums');
  sequencer(bassSoundsArray, 'bass');
  sequencer(violinSoundsArray, 'violin');
}
const noteNamesC1ToC2 = ["C2", "B1", "A1", "G1", "F1", "E1", "D1", "C1"];
const noteNamesC4ToC5 = ["C5", "B4", "A4", "G4", "F4", "E4", "D4", "C4"];

function App() {
  const [startButtonClicked, setStartButtonClicked] = useState(false);
  return (
    <div className="app">
      <header><h1>Online Daw</h1><p>Sign In</p><p>Sign Up</p><p>Blog</p></header>
      <div className="musicmaker">
        <div className="topbar"><h2>How to Use This</h2><button onClick={() => { if (!startButtonClicked) { startSequencer() };setStartButtonClicked(true)}}>start</button> </div>
      <h3>Drums</h3>
      <InputGrid noteNamesArray={noteNamesC1ToC2} instrument={"drums"}/>
      <h3>Bass</h3>
      <InputGrid noteNamesArray={noteNamesC1ToC2} instrument={"bass"}/>
      <h3>Violin</h3>
      <InputGrid noteNamesArray={noteNamesC4ToC5} instrument={"violin"}/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
