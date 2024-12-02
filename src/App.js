import React,{useState} from 'react'

const App = () => {
  const [count, setCount] = useState(0)

  function increment() {
    setCount(prev => prev +1)
  }

  function decrement(){
    setCount(prev => prev - 1)
  }

  return (
    <>
      <button onClick={decrement}>-</button>
      &nbsp;&nbsp;&nbsp;<span>{count}</span>&nbsp;&nbsp;&nbsp;
      <button onClick={increment}>+</button>
    </>
  )
}

export default App
