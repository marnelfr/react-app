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

function Todo () {
  const [tasks, addTask] = useState([<p>No task found for the moment</p>])
  const [firstTask, changeFirstTask] = useState(true)
  const inputNewTask = useRef()
  const [title, setTitle] = useState('Empty Todo List')
  const [count, countIncrementor] = useIncrement(0, 1)

  useEffect(function() {
    document.title = title
  }, [title])

  const handleTaskAdded = (e) => {
    e.preventDefault()
    const newTask = inputNewTask.current.value
    if(firstTask) {
      changeFirstTask(false)
      addTask([<Task key={count} name={newTask} />])
    } else{
      setTitle('Todo List')
      addTask(tasks => [...tasks, <Task key={count} name={newTask} />])
    }
    countIncrementor()
    inputNewTask.current.value = ''
  }

  return <section style={{ margin: '5px' }}>
    <h4>Todo list</h4>
    <div style={{ border: '1px solid #ccc', minHeight: '20px' }}>
      {tasks}
    </div>
    <TaskAdder ref={inputNewTask} onTaskAdded={handleTaskAdded} />
  </section>
}

export {Todo};