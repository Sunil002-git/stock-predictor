import React from 'react'

// const h2Element = React.createElement("h2", null, "Learn JSX")

const LearnJSX = () => {
    let stock = 'Apple'
  return (
    <>
        <h2>JSX</h2>
        <h2>Price: {10 + 20}</h2>
        <h2>Stock Name: {stock}</h2>
        <h2 className='bg-success'>Class</h2>
        <h2 className={stock}>Dynamic Class</h2>
        {/* <div>LearnJSX</div> */}
        {/* {h2Element} */}
    </>
    
  )
}

export default LearnJSX