import React from 'react'
import useCounter from '../hooks/useCounter'

const LearnCustomHooks = () => {
    const { count, increment, decrement, reset  } = useCounter(5)
  return (
    <>
    <h1>Count : {count}</h1>
    <button onClick={increment}>Add</button>
    <button onClick={decrement}>sub</button>
    <button onClick={reset}>reset</button>
    </>
  )
}

export default LearnCustomHooks