import React, {useState, useRef} from 'react'
import { useEffect } from 'react'

function Task({name}) {
  const taskContainer = useRef(),
    date = new Date()

  const handleClick = (e) => {
    e.preventDefault()
    taskContainer.current.remove()
  }

  return <div ref={taskContainer}>
    <small style={{ color: '#ccc', marginRight: '10px' }}>{date.toLocaleDateString()} {date.toLocaleTimeString()}</small>
    {name} <button onClick={handleClick} style={{ color: 'black', textDecoration: 'none', marginLeft: '10px' }}>X</button>
  </div>
}

const TaskAdder = React.forwardRef(function({onTaskAdded}, ref) {
  const handleKeyUp = (e) => {
    if(e.key === 'Enter') {
      onTaskAdded(e)
    }
  }

  return <>
    <input onKeyUp={handleKeyUp} type="text" ref={ref} />
    <button style={{ marginLeft: '10px' }} onClick={onTaskAdded}>Add task</button>
  </>
})

function useIncrement(initial, step) {
  const [count, setCount] = useState(initial)
  function increment() {
    setCount(count => count +1)
  }
  return [count, increment]
}

function useFetch(url) {
  const [state, setState] = useState({
    items: [],
    loading: true
  })
  useEffect(() => {
    (async () => {
      const res = await fetch(url)
      const data = await res.json()
      if(res.ok) {
        setState({
          items: data,
          loading: false
        })
      } else {
        setState(state => ({...state, loading: false}))
      }
    })()
  }, [])

  return [state.loading, state.items, setState]
}

function Todo () {
  const inputNewTask = useRef()
  const [loading, tasks, setState] = useFetch('https://jsonplaceholder.typicode.com/todos?_limit=10')


  const handleTaskAdded = (e) => {
    e.preventDefault()
    const newTask = inputNewTask.current.value
    setState(state => {
      return {
        ...state,
        items: [...state.items, {id: (new Date()).getMilliseconds(), title: newTask}]
      }
    })
    inputNewTask.current.value = ''
  }

  if(loading) {
    return <div>Chargement...</div>
  }
  return <section style={{ margin: '5px' }}>
    <h4>Todo list</h4>
    <div style={{ border: '1px solid #ccc', minHeight: '20px' }}>
      {tasks.map(task => <Task key={'task' + task.id} name={task.title} />)}
    </div>
    <TaskAdder ref={inputNewTask} onTaskAdded={handleTaskAdded} />
  </section>
}

export {Todo};