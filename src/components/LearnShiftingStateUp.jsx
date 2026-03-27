import React from 'react'

const LearnShiftingStateUp = (props) => {
    const handleCLick = () => {
        let stock = 'Tesla'
        props.getStock(stock)
    }
    return (
    <>
        <div>LearnShiftingStateUp</div>
        <button onClick={handleCLick}>Click Here</button>
    </>
    
  )
}

export default LearnShiftingStateUp