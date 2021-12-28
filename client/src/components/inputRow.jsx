import './inputRow.css';

function inputRow(props) {
  return (<div className="input-row"><p>{props.noteName}</p><div className={props.className}>
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
export default inputRow;