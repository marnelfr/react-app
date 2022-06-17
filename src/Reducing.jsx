import { useCallback } from "react";
import { useReducer } from "react";

const countReducer = (state, action) => {
  switch(action.type) {
    case 'increment':
      return {count: state.count + (action.step || 1)}
    case 'decrement':
      if(state.count <= 0) {
        return state
      }
      return {count: state.count - 1}
    case 'reset':
      return countInit(0)
    default:
      throw new Error(`Action of type ${action.type} unknown`)
  }
}

const countInit = (value) => ({count: value})

function Reducing() {
  const [count, dispatch] = useReducer(countReducer, 0, countInit)
  
  const increment = useCallback(() => dispatch({type: 'increment'}), [])
  const increment_10 = useCallback(() => dispatch({type: 'increment', step: 10}), [])
  const decrement = useCallback(() => dispatch({type: 'decrement'}), [])
  const reset = useCallback(() => dispatch({type: 'reset'}), [])

  return ( <div className="container mt-2">
    <p>Compteur: {JSON.stringify(count)}</p>
    <button onClick={increment} className="btn btn-primary">Increment</button>
    <button onClick={increment_10} className="btn btn-primary mx-2">Increment by 10</button>
    <button onClick={decrement} className="btn btn-primary mx-2">Decrement</button>
    <button onClick={reset} className="btn btn-primary mx-2">Reset</button>
  </div> );
}

export default Reducing;