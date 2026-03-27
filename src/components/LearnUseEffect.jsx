import {useState, useEffect} from 'react'

const LearnUseEffect = () => {
    const [count, setCount] = useState(0)
    const [randomNum, setRandomNum] = useState(0)


    const increaseCount = () => {
        setCount(count + 1)
    }
    const generateRandomNum = () => {
        const randomNum = Math.floor(Math.random() * 100);
        setRandomNum(randomNum);
    }

    useEffect(() => {
        console.log("Use Effect");

        return () => {
            console.log("Cleanup Function is Called");
        }
    }, [count, randomNum])
  return (
    <>
    <h2>Count: {count}</h2>
    <button onClick={increaseCount}>Increase</button>
    <hr></hr>
    <h2>Random Number: {randomNum}</h2>
    <button onClick={generateRandomNum}>Random</button>
    </>
  )
}

export default LearnUseEffect