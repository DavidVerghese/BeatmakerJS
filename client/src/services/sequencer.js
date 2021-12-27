import * as Tone from 'tone'

import kickFile from '../sounds/drums/kick.wav';
import snareFile from '../sounds/drums/snare.wav';
import hihatFile from '../sounds/drums/hihat.wav';
import rimshotFile from '../sounds/drums/808rimshot.wav';
import highTomFile from '../sounds/drums/808hightom.wav';
import lowTomFile from '../sounds/drums/808lowtom.wav';
import handclapFile from '../sounds/drums/808handclap.wav';
import crashcymbalFile from '../sounds/drums/crash-cymbal.wav';

export default function sequencer() {
  
  let index = 0;
  const kick = new Tone.Player(kickFile).toDestination();
  const snare = new Tone.Player(snareFile).toDestination();
  const hihat = new Tone.Player(hihatFile).toDestination();
  const rimshot = new Tone.Player(rimshotFile).toDestination();
  const highTom = new Tone.Player(highTomFile).toDestination();
  const lowTom = new Tone.Player(lowTomFile).toDestination();
  const handclap = new Tone.Player(handclapFile).toDestination();
  const crashcymbal = new Tone.Player(crashcymbalFile).toDestination();

  Tone.Transport.scheduleRepeat(repeat, '8n');
  Tone.Transport.start();

  function repeat() {
    let step = index % 8;
    let kickInputs = document.querySelector(`.kick input:nth-child(${step + 1})`);
    let snareInputs = document.querySelector(`.snare input:nth-child(${step + 1})`);
    let hihatInputs = document.querySelector(`.hihat input:nth-child(${step + 1})`);
    let rimshotInputs = document.querySelector(`.rimshot input:nth-child(${step + 1})`);
    let highTomInputs = document.querySelector(`.hightom input:nth-child(${step + 1})`);
    let lowTomInputs = document.querySelector(`.lowtom input:nth-child(${step + 1})`);
    let handclapInputs = document.querySelector(`.handclap input:nth-child(${step + 1})`);
    let crashcymbalInputs = document.querySelector(`.crashcymbal input:nth-child(${step + 1})`);

    if (kickInputs.checked) {
      kick.start();
    }
    if (snareInputs.checked) {
      snare.start();
    }
    if (hihatInputs.checked) {
      hihat.start();
    }
    if (rimshotInputs.checked) {
      rimshot.start();
    }
    if (highTomInputs.checked) {
      highTom.start();
    }
    if (lowTomInputs.checked) {
      lowTom.start();
    }
    if (handclapInputs.checked) {
      handclap.start();
    }
    if (crashcymbalInputs.checked) {
      crashcymbal.start();
    }
    index++;
  }
}