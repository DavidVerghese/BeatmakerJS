import './InputRow.css';

function InputRow(props) {
  const { color, className, noteName} = props;
  return (<div className="input-row"><p>{noteName}</p>
  <div className={className}>
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