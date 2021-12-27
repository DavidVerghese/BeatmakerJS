import * as Tone from 'tone'
import kickFile from '../sounds/drums/kick.wav';
import snareFile from '../sounds/drums/snare.wav';
import hihatFile from '../sounds/drums/hihat.wav';
import rimshotFile from '../sounds/drums/808rimshot.wav';
import highTomFile from '../sounds/drums/808hightom.wav';
import lowTomFile from '../sounds/drums/808lowtom.wav';
import handclapFile from '../sounds/drums/808handclap.wav';
import crashcymbalFile from '../sounds/drums/crash-cymbal.wav';

export default function drySequencer(file, className) {
  
  let index = 0;
 
  const kick = new Tone.Player(kickFile).toDestination();
  const snare = new Tone.Player(snareFile).toDestination();
  const hihat = new Tone.Player(hihatFile).toDestination();
  const rimshot = new Tone.Player(rimshotFile).toDestination();
  const highTom = new Tone.Player(highTomFile).toDestination();
  const lowTom = new Tone.Player(lowTomFile).toDestination();
  const handclap = new Tone.Player(handclapFile).toDestination();
  const crashcymbal = new Tone.Player(crashcymbalFile).toDestination();
  
  const sounds = [kick, snare,hihat,rimshot,highTom,lowTom,handclap,crashcymbal];
  let classNamesArray = ['kick','snare','hihat','rimshot','hightom','lowtom','handclap','crashcymbal'];

  Tone.Transport.scheduleRepeat(repeat, '8n');
  Tone.Transport.start();

  function repeat() {
    let step = index % 8;
    classNamesArray.map((index, key) => {
      let inputs = document.querySelector(`.${index} input:nth-child(${step + 1})`);
      if (inputs.checked) {
        sounds[key].start();
      }
    })
    index++;
  }
}
drySequencer();