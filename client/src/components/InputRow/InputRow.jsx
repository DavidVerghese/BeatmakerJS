import './InputRow.css';

function InputRow(props) {
  return (<div className="input-row"><p className={props.color}>{props.noteName}</p>
  <div className={props.className}>
  <input type="checkbox" />
  <input type="checkbox" />
  <input type="checkbox" />
  <input type="checkbox" />
  <input type="checkbox" />
  <input type="checkbox" />
  <input type="checkbox" />
  <input type="checkbox" />
</div></div>)
}
export default InputRow;