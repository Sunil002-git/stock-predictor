import React, {use, useContext} from 'react'
import { StockContext, UserContext } from '../App'

const ChildC = () => {
    const stockData = useContext(StockContext)
    const userData = useContext(UserContext)
  return (
    <>
        <h3>Stock : {stockData.stock} - {stockData.price}</h3>
        <h2>User: {userData.user.name}</h2>
        <h2>IsLoggedIn: {userData.user.isLoggedIn}</h2>
    </>
  )
}

export default ChildC