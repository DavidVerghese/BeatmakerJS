import InputRow from './inputRow'

function inputGrid(props) {
  return (<div className={props.className}>
  <InputRow className={"zero"} />
  <InputRow className={"one"} />
  <InputRow className={"two"} />
  <InputRow className={"three"} />
  <InputRow className={"four"} />
  <InputRow className={"five"} />
  <InputRow className={"six"} />
  <InputRow className={"seven"} />
</div>)
}
export default inputGrid;