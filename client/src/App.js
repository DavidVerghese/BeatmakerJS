
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
        <InputGrid name={"kick"} />
        <InputGrid name={"snare"} />
        <InputGrid name={"hihat"} />
        <InputGrid name={"rimshot"} />
        <InputGrid name={"hightom"} />
        <InputGrid name={"lowtom"} />
        <InputGrid name={"handclap"} />
        <InputGrid name={"crashcymbal"}/>
      </div>
    </div>
  );
}

export default App;
