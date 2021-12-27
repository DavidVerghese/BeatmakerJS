
import './App.css';
import sequencer from './services/sequencer';
import * as Tone from 'tone'
import InputGrid from "./components/inputGrid"
function App() {

  return (
    <div >
      <h1>Online Daw</h1>
      <button onClick={ async () => { await Tone.start(); console.log("context started");  sequencer();}}>start</button>
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
