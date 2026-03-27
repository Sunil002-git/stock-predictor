import React from 'react'

const LearnEvent = () => {
    const handleClick = () => {
        console.log("Button Clicked")
    }
    const handleClickAgain = (param) => {
        console.log(param)
    }
    return (
    <>
        <div>LearnEvent</div>
        <button onClick={handleClick}>Click here</button>
        <br></br>
        <button onClick={() => handleClickAgain("Sunil Clicked Again")}>Clicked Again</button>
    </>
      )
}

export default LearnEvent