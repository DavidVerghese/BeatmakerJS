
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

const soundsArray = [kickFile, snareFile, hihatFile, rimshotFile, highTomFile, lowTomFile, handclapFile, crashcymbalFile]
let classNamesArray = ['kick', 'snare', 'hihat', 'rimshot', 'hightom', 'lowtom', 'handclap', 'crashcymbal'];

function App() {
  return (
    <div >
      <h1>Online Daw</h1>
      <button onClick={ async () => { await Tone.start(); console.log("context started");  sequencer(soundsArray,classNamesArray);}}>start</button>
      <div className="drums">
        <InputGrid className={"kick"} />
        <InputGrid className={"snare"} />
        <InputGrid className={"hihat"} />
        <InputGrid className={"rimshot"} />
        <InputGrid className={"hightom"} />
        <InputGrid className={"lowtom"} />
        <InputGrid className={"handclap"} />
        <InputGrid className={"crashcymbal"}/>
      </div>
    </div>
  );
}

export default App;
