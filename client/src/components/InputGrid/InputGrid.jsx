import InputRow from '../InputRow/InputRow'
import './InputGrid.css';

function InputGrid(props) {
  const { instrument, noteNamesArray } = props;
  return (<div className={instrument}>
    <InputRow color={"red-text"} noteName={noteNamesArray[0]} className={"zero"} />
  <InputRow color={"orange-text"} noteName={noteNamesArray[1]} className={"one"} />
  <InputRow color={"yellow-text"} noteName={noteNamesArray[2]} className={"two"} />
  <InputRow color={"green-text"} noteName={noteNamesArray[3]} className={"three"} />
  <InputRow color={"blue-text"} noteName={noteNamesArray[4]} className={"four"} />
  <InputRow color={"magenta-text"} noteName={noteNamesArray[5]} className={"five"} />
  <InputRow  color={"purple-text"} noteName={noteNamesArray[6]} className={"six"} />
  <InputRow color={"white-text"} noteName={noteNamesArray[7]} className={"seven"} />
</div>)
}
export default InputGrid;