import * as Tone from 'tone'
import kickSound from "../drums/kick-electro01.wav"
import snareSound from "../drums/snare-electro.wav"

export default function sequencer() {
  
  let index = 0;
  const kick = new Tone.Player(kickSound).toDestination();
  const snare = new Tone.Player(snareSound).toDestination();
  Tone.Transport.scheduleRepeat(repeat, '8n');
  Tone.Transport.start();

  function repeat() {
    let step = index % 8;
    let kickInputs = document.querySelector(`.kick input:nth-child(${step + 1})`);
    let snareInputs = document.querySelector(`.snare input:nth-child(${step + 1})`);
    if (kickInputs.checked) {
      kick.start();
    }
    if (snareInputs.checked) {
      snare.start();
    }
    index++;
  }
}