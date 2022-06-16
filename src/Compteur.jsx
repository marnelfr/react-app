import React, { useState } from "react";

function useIncrement(initial, step) {
  const [count, setCount] = useState(initial)
  const increment = () => {
    setCount(count => count + step)
  }
  return [count, increment]
}

function Compteur({order}) {
  const [count, increment] = useIncrement(0, order === 'ASC' ? 1 : -1)
  return (
    <button onClick={increment}>Compteur: {count}</button>
  );
}

export {Compteur};