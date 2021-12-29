import * as Tone from 'tone'

// based on this tutorial: https://www.youtube.com/watch?v=8T4SCksjrQ4

export default function sequencer(soundsArray,className) {
  
  let index = 0;
  const sound0 = new Tone.Player(soundsArray[0]).toDestination();
  const sound1 = new Tone.Player(soundsArray[1]).toDestination();
  const sound2 = new Tone.Player(soundsArray[2]).toDestination();
  const sound3 = new Tone.Player(soundsArray[3]).toDestination();
  const sound4 = new Tone.Player(soundsArray[4]).toDestination();
  const sound5 = new Tone.Player(soundsArray[5]).toDestination();
  const sound6 = new Tone.Player(soundsArray[6]).toDestination();
  const sound7 = new Tone.Player(soundsArray[7]).toDestination();

  Tone.Transport.scheduleRepeat(repeat, '8n');
  Tone.Transport.start();

  function repeat() {
    let step = index % 8;
    let zeroInputs = document.querySelector(`.${className} .zero input:nth-child(${step + 1})`);
    let oneInputs = document.querySelector(`.${className} .one input:nth-child(${step + 1})`);
    let twoInputs = document.querySelector(`.${className} .two input:nth-child(${step + 1})`);
    let threeInputs = document.querySelector(`.${className} .three input:nth-child(${step + 1})`);
    let fourInputs = document.querySelector(`.${className} .four input:nth-child(${step + 1})`);
    let fiveInputs = document.querySelector(`.${className} .five input:nth-child(${step + 1})`);
    let sixInputs = document.querySelector(`.${className} .six input:nth-child(${step + 1})`);
    let sevenInputs = document.querySelector(`.${className} .seven input:nth-child(${step + 1})`);

    if (zeroInputs.checked) {
      sound0.start();
    }
    if (oneInputs.checked) {
      sound1.start();
    }
    if (twoInputs.checked) {
      sound2.start();
    }
    if (threeInputs.checked) {
      sound3.start();
    }
    if (fourInputs.checked) {
      sound4.start();
    }
    if (fiveInputs.checked) {
      sound5.start();
    }
    if (sixInputs.checked) {
      sound6.start();
    }
    if (sevenInputs.checked) {
      sound7.start();
    }
    index++;
  }
}