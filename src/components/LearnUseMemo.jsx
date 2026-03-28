import React, {useState, useMemo} from 'react'

const LearnUseMemo = () => {
    const [count, setCount] = useState(0);
    const [number, setNumber] = useState(100000000);

    const increaseCount = () => {
        if(count == 10) {
            setNumber(999999999)
        }
        setCount(count + 1)
    }

    const setOfNumbers = useMemo(() => {
        let sum = 0;
        for (let i=1; i<=number; i++) {
            sum += i
        }
        return sum
    }, [number])
    console.log(`Sum of numbers from 1 to ${number}`, setOfNumbers)
  return (
    <>
    <h2>Count : {count}</h2>
    <button onClick={increaseCount}>Add</button>
    </>
  )
}

export default LearnUseMemo
