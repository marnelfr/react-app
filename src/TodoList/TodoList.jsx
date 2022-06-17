import { forwardRef, useReducer } from 'react'
import { memo } from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { createContext } from 'react'
import { useRef } from 'react'
import { useMemo } from 'react'
import { useCallback } from 'react'
import './TodoList.scss'

const TASKS = [
  {id: 1, name: 'Aller au cours demain matin', createdAt: new Date(), done: false},
  {id: 2, name: 'Cuisiner le diner', createdAt: new Date(), done: false}
]

const THEMES = {
  light: {
    color: 'blue'
  },
  dark: {
    color: 'red'
  }
}

const ThemeContext = createContext({
  themes: THEMES,
  changeTheme: () => {}
})

const Task = memo(({task, onTaskDone}) => {
  const handleChange = useCallback((e) => {
    onTaskDone({id: task.id, done: e.target.checked})
  }, [])

  return (
    <tr className={task.done ? 'done' : null}>
      <td>{task.id}</td>
      <td className='body'>
        {task.name} <br/>
        <small><i>Added since {task.createdAt.toLocaleDateString()} at <b>{task.createdAt.toLocaleTimeString()}</b></i></small>
      </td>
      <td>
        <input onChange={handleChange} checked={task.done} disabled={task.done} type="checkbox" />
      </td>
    </tr>
  )
})

const TasksTable = function({tasks}) {
  return (
    <div className="col-12 tasks-container">
      <table className="table">
        <tbody>
          {tasks}
        </tbody>
      </table>
    </div>
  )
}

const TaskAdder = ({onTaskAdd}) => {
  const ref = useRef()
  const {theme, themeToggle} = useContext(ThemeContext)
  console.log(theme)

  const handleClick = useCallback((e) => {
    e.preventDefault()
    const task = ref.current.value
    if(task.trim().length > 0) {
      onTaskAdd(task)
      ref.current.value = ''
      ref.current.focus()
    }
  }, [])

  return (
    <div className="add-task-container col-12 text-center">
      <input type="text" ref={ref} className='form-control' placeholder='What do you want to do..?' />
      <button onClick={handleClick} className="btn btn-outline-dark">Add task</button>
      <button onClick={themeToggle} className="btn ml-2">Change theme</button>
    </div>
  )
}

const getTaskIndexById = (tasks, id) => {
  let task_index = 0
  tasks.forEach((task, index) => {
    if(task.id == id) {
      task_index = index
    }
  })
  return task_index
}

const editTask = (state, action) => {
  try{
    const index = getTaskIndexById(state, action.id)
    state[index] = {...state[index], done: action.done} 
    return [...state]
  } catch(e) {
    console.error('erreur', e)
    return state
  }
}

const addTask = (tasks, action) => {
  const newTask = {
    id: action.id,
    name: action.name,
    done: false,
    createdAt: new Date()
  }
  return [...tasks, newTask]
}

const taskReducer = (tasks, action) => {
  switch (action.type) {
    case 'edit':
      return editTask(tasks, action)
    case 'add':
      return addTask(tasks, action)
    default:
      throw new Error(`Action type ${action.type} unknown`)
  }
}

const getNewId = (tasks) => {
  let lastId = 0
  tasks.forEach(task => {
    if(task.id > lastId) {
      lastId = task.id
    }
  })
  return ++lastId
}

function TodoList() {
  const [tasks, dispatch] = useReducer(taskReducer, TASKS),
    [theme, setTheme] = useState('light')

  const handleTaskDone = useCallback(({id, done}) => {
    dispatch({type: 'edit', id, done})
  }, [])

  const taskElements = useMemo(() => {
    return tasks.map(task => <Task onTaskDone={handleTaskDone} key={task.id} task={task} />)
  }, [tasks, handleTaskDone])

  const handleTaskAdd = useCallback((name) => {
    dispatch({type: 'add', id: getNewId(tasks), name})
  }, [tasks])

  const themeToggle = useCallback(() => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    console.log(newTheme)
    setTheme(newTheme)
  }, [theme])

  const contextValue = useMemo(() => {
    return {
      theme,
      changeTheme: themeToggle
    }
  }, [theme, themeToggle])

  return (
    <ThemeContext.Provider value={contextValue}>
      <section style={THEMES[theme]} className="container">
        <header className='text-center'>
          <h3>++ Todo List ++</h3>
        </header>
        <div className="row">
          <small className='ml-2'> > My list of task</small>
          <TasksTable tasks={taskElements} />
          <TaskAdder onTaskAdd={handleTaskAdd} />
        </div>
      </section>
    </ThemeContext.Provider>
  )
}

export default TodoList;