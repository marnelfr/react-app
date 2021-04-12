import React, {useState, forwardRef, Component, createRef} from 'react'
import './App.css'

function useIncrement(init, step) {
  const [state, setState] = useState(init)
  const increment = function () {
    setState(state+step)
  }
  return [state, increment]
}

const Incrementer = forwardRef(function (props, ref) {
  const [count, increment] = useIncrement(props.initial, props.step)
  const [count2, increment2] = useIncrement(props.initial, 1)

  return <>
    <button ref={ref} onClick={increment}>
      {props.children} {count}
    </button>
    <button onClick={increment2}>Default step {count2}</button>
  </>
})

export default class App extends Component{

  constructor(props) {
    super(props)
    this.inc = createRef()
  }

  render() {
    return <div>
      Hello World
      <Incrementer initial={0} step={5} ref={this.inc}>Marnel</Incrementer>
    </div>
  }

}