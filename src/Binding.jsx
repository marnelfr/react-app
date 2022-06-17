import React, { useState } from "react";
import { useCallback } from "react";

function Binding({value, onClick}) {
  const [val, setVal] = useState(value)
  
  const handleBtnClick = useCallback((e) => {
    onClick(val)
  }, [val, onClick])

  const handleChange = useCallback((e) => {
    setVal(e.target.value)
  }, [])

  return <>
    <input type="text" onChange={handleChange} value={val} />
    <p>{value}</p>
    <button onClick={handleBtnClick} disabled={val == ''}>Submit</button>
  </>;
}

function Form() {
  const [state, setState] = useState('')

  const handleClick = useCallback((val) => {
    setState(val)
  }, [])

  return <>
    <Binding onClick={handleClick} value={state} />
  </>
}

export {Binding, Form};