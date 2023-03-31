import { useState,useCallback } from 'react'
import './App.css'
import List from './List'

function App() {
  const [count, setCount] = useState(0)
  const [dark,setDark] = useState(false)
  const themeStyles = {
    backgroundColor: dark ? '#333' : '#CCC',
    color: dark ? '#CCC' : '#333',
    padding: '2rem',
    margin: '2rem'
  }
  const getItems =useCallback(() => {
    for (let index = 0; index < 1000000000; index++) {}
    return [count+1, count+2, count+3]
  },[count]) 
  return (
    <div className="App" style={themeStyles}>
      <input type="number" value={count} onChange={e => setCount(parseInt(e.target.value))} />
      <button className='btn' onClick={() => setDark(prevDark => !prevDark)}>Toggle Theme</button>
      <List getItems={getItems} />

    </div>
  )
}

export default App
