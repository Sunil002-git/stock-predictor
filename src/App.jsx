import HelloWorld from "./components/HelloWorld"
import LearnReact from "./components/LearnReact"
import LearnJSX from "./components/LearnJSX"
import LearnProps from "./components/LearnProps"
import LearnEvent from "./components/LearnEvent"
import LearnShiftingStateUp from "./components/LearnShiftingStateUp"
import CounterApp from "./components/CounterApp"
import LearnUseEffect from "./components/LearnUseEffect"
import LearnUseMemo from "./components/LearnUseMemo"
import ChildA from "./components/ChildA"
import { createContext, useState } from "react"
import LearnUseRef from "./components/LearnUseRef"
import LearnCustomHooks from "./components/LearnCustomHooks"
import LearnConditionalRendering from "./components/LearnConditionalRendering"
import LearnMap from "./components/LearnMap"
import LearnForm from "./components/LearnForm"

const StockContext = createContext()
const UserContext = createContext()

function App() {
  
// let price = 200
  // const getStock = (data) => {
  //   console.log(data)
  // }
  let price = 300
  let stock = 'Tesla'
  const [user, setUser] = useState({name: 'sunil', isLoggedIn: 'Yes'})
  return (
    <>
      <h1>Learn React</h1>
      {/* <HelloWorld />
      <LearnReact /> */}
      {/* <LearnJSX />  */}
      {/* <LearnProps stock="Apple" price={price} /> */}
      {/* <LearnEvent /> */}
      {/* <LearnShiftingStateUp getStock = {getStock} /> */}
      {/* <CounterApp /> */}
      {/* <LearnUseEffect /> */}
      {/* <LearnUseMemo /> */}
      {/* <StockContext.Provider value={{ stock, price }}>
        <UserContext.Provider value = {{user, setUser}}>
          <ChildA />
        </UserContext.Provider>
      </StockContext.Provider> */}
      {/* <LearnUseRef /> */}
      {/* <LearnCustomHooks /> */}
      {/* <LearnConditionalRendering /> */}
      {/* <LearnMap /> */}
      <LearnForm />
    </>
  )
}

export {StockContext, UserContext}
export default App

