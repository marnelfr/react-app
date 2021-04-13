import React, {useState, useEffect} from 'react'

function useIncrement(init = 0, step = 1) {
  const [count, setCount] = useState(init)

  const increment = (e) => {
    e.preventDefault()
    setCount(c => c + step)
  }
  return [count, increment]
}

function useFeth(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true)
  useEffect(function () {
    (async function () {
      const response = await fetch(url)
      const responseData = await response.json()
      if(response.ok) {
        setData(responseData)
      }else{
        setData(false)
      }
      setLoading(false)
    })()
  }, [])

  return [loading, data]
}

function PostTable_old() {
  const [events, setEvents] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(function () {
    (async function () {
      const response = await fetch('https://localhost:8000/timeline')
      const data = await response.json()
      if (response.ok) {
        setEvents(data)
      } else {
        alert(JSON.stringify(response))
      }
      setLoading(false)
    })()
  }, [])


  if(loading) {
    return <p>Chargement...</p>
  }
  const list = events.map((event) => <tr key={event.id}>
    <td>{event.title}</td>
    <td>{event.subtitle}</td>
  </tr>)

  return <table>
    {list}
  </table>
}

function PostTable() {
  let [loading, data] = useFeth('https://localhost:8000/timeline')
  while(loading) {
    return <p>Chargement...</p>
  }

  return <table>
    {data.map((event) => <tr key={event.id}>
      <td key={'td1' + event.id}>{event.title}</td>
      <td key={'td2' + event.id}>{event.subtitle}</td>
    </tr>)}
  </table>
}


function useAutoIncrement(init = 0, step = 1) {
  const [count, setCount] = useState(init)

  useEffect(function () {
    const time = setTimeout(function () {
      setCount(c => c + step)
    }, 1000)
    return function () {
      clearTimeout(time)
    }
  }, [count])

  return count
}

function useToggle(initial = false) {
  const [state, setState] = useState(initial)

  const handleToggle = function () {
    setState((s) => !s)
  }
  return [state, handleToggle]
}

function Compteur ({initial, step}) {
  const [count, increment] = useIncrement(initial, step)

  return <button onClick={increment}>
    Increment {count}
  </button>
}

function Compteur2 ({initial, step}) {
  const count = useAutoIncrement(initial, step)

  return <button>
    Increment {count}
  </button>
}


export function App() {
  const [compteurVisible, toggleCompteur] = useToggle(true)

  return <div>
    <label htmlFor="toggler">
      Afficher le compteur
      <input id="toggler" type="checkbox" onChange={toggleCompteur} checked={compteurVisible} />
    </label>
    <br/>
    {compteurVisible && <Compteur2 initial={0} step={2} />}

    <PostTable/>
  </div>
}