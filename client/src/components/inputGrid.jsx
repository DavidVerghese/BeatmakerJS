import InputRow from './inputRow'
import './inputGrid.css';

function inputGrid(props) {
  return (<div className={props.instrument}>
    <InputRow color={"red-text"} noteName={props.noteNamesArray[0]} className={"zero"} />
  <InputRow color={"orange-text"} noteName={props.noteNamesArray[1]} className={"one"} />
  <InputRow color={"yellow-text"} noteName={props.noteNamesArray[2]} className={"two"} />
  <InputRow color={"green-text"} noteName={props.noteNamesArray[3]} className={"three"} />
  <InputRow color={"blue-text"} noteName={props.noteNamesArray[4]} className={"four"} />
  <InputRow color={"magenta-text"} noteName={props.noteNamesArray[5]} className={"five"} />
  <InputRow  color={"purple-text"} noteName={props.noteNamesArray[6]} className={"six"} />
  <InputRow color={"white-text"} noteName={props.noteNamesArray[7]} className={"seven"} />
</div>)
}
export default inputGrid;