import * as Tone from 'tone'



export default function sequencer(soundsArray,classNamesArray) {
  
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
    let zeroInputs = document.querySelector(`.${classNamesArray[0]} input:nth-child(${step + 1})`);
    let oneInputs = document.querySelector(`.${classNamesArray[1]} input:nth-child(${step + 1})`);
    let twoInputs = document.querySelector(`.${classNamesArray[2]} input:nth-child(${step + 1})`);
    let threeInputs = document.querySelector(`.${classNamesArray[3]} input:nth-child(${step + 1})`);
    let fourInputs = document.querySelector(`.${classNamesArray[4]} input:nth-child(${step + 1})`);
    let fiveInputs = document.querySelector(`.${classNamesArray[5]} input:nth-child(${step + 1})`);
    let sixInputs = document.querySelector(`.${classNamesArray[6]} input:nth-child(${step + 1})`);
    let sevenInputs = document.querySelector(`.${classNamesArray[7]} input:nth-child(${step + 1})`);

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