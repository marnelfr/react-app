import React, { useRef, useCallback, useEffect, useState } from "react";

function useLoader() {
  const [isLoading, setLoading] = useState(true)
  function stopLoading() {
    setLoading(false)
  }
  return [isLoading, stopLoading]
}

function Comment({comment}) {
  return <tr>
    <td>{comment.name}</td>
    <td>{comment.email}</td>
    <td>{comment.body}</td>
  </tr>
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

  return [state.loading, state.items]
}

const encoder = function(num) {
  console.log('executed')
  return 'encoded-' + num
}


function PostTable() {
  const [isLoading, comments] = useFetch('https://jsonplaceholder.typicode.com/comments?_limit=10')
  const [num, setNum] = useState(5)

  
  const handleChange = useCallback(function(e) {
    setNum(e.target.value)
  }, [])

  if(isLoading) {
    return <div style={{ boder: '1px solid #eee', padding: '10px' }}>
      Chargement...
    </div>
  }

  let encodedNum = encoder(num)


  return <table style={{ boder: '1px solid #eee', padding: '5px' }}>
    <thead>
      <tr>
        <th>Nom</th>
        <th>Email</th>
        <th>Contenu</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td colSpan={3}>
          {encodedNum} <input type="text" onChange={handleChange} value={num} /> <button>Encode</button> <button>Load</button>
        </td>
      </tr>
      {comments.map(comment => <tr key={comment.id}>
        <td>{comment.name}</td>
        <td>{comment.email}</td>
        <td>{comment.body}</td>
      </tr>)}
    </tbody>
  </table>;
}

export {PostTable};