import InputRow from './inputRow'

function inputGrid(props) {
  return (<div className={props.className}>
    <InputRow noteName={props.noteNamesArray[0]} className={"zero"} />
  <InputRow noteName={props.noteNamesArray[1]} className={"one"} />
  <InputRow noteName={props.noteNamesArray[2]} className={"two"} />
  <InputRow noteName={props.noteNamesArray[3]} className={"three"} />
  <InputRow noteName={props.noteNamesArray[4]} className={"four"} />
  <InputRow noteName={props.noteNamesArray[5]} className={"five"} />
  <InputRow noteName={props.noteNamesArray[6]} className={"six"} />
  <InputRow noteName={props.noteNamesArray[7]} className={"seven"} />
</div>)
}
export default inputGrid;