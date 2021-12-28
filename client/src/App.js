
import './App.css';
import sequencer from './services/sequencer';
import * as Tone from 'tone'
import InputGrid from "./components/inputGrid"

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

function App() {
  return (
    <div >
      <h1>Online Daw</h1>
      <button onClick={async () => { await Tone.start(); sequencer(drumSoundsArray, 'drums'); sequencer(bassSoundsArray, 'bass');sequencer(violinSoundsArray,'violin')}}>start</button>
      <p>Drums</p>
      <InputGrid className={"drums"}/>
      <p>Bass</p>
      <InputGrid className={"bass"}/>
      <p>Violin</p>
      <InputGrid className={"violin"}/>
    </div>
  );
}

export default App;
