import React, {useState} from 'react'
import { useEffect } from 'react'

function useIncrement(initial, step = 1) {
  const [count, setCount] = useState(initial)
  function countIncrementor() {
    setCount(count => count + step)
  }
  return [count, countIncrementor]
} 

const useAutoIncrement = function(initialValue = 0, step = 1, milliseconds = 1000) {
  const [value, setValue] = useIncrement(initialValue, step)
  useEffect(function() {
    const timer = window.setInterval(function() {
      setValue(v => v+1)
    }, milliseconds)
    return function() {
      window.clearInterval(timer)
    }
  }, [])
  return [value, setValue]
}

function Compteur() {
  const [count, countIncrementor] = useAutoIncrement(10, 2)
  return <div>
    <button onClick={countIncrementor}>Incrémmenter {count}</button>
  </div>
}

export {Compteur}