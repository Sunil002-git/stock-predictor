import React from 'react'

// const LearnProps = (props) => {
//   return (
//     <>
//     <div>LearnProps</div>
//     <h3>Stock Name: {props.stock}</h3>
//     <h3>Stock Price: {props.price}</h3>
//     </>
    
//   )
// }
const LearnProps = ({stock, price}) => {
  return (
    <>
    <div>LearnProps</div>
    <h3>Stock Name: {stock}</h3>
    <h3>Stock Price: {price}</h3>
    </>
    
  )
}

export default LearnProps