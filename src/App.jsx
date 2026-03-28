import HelloWorld from "./components/HelloWorld"
import LearnReact from "./components/LearnReact"
import LearnJSX from "./components/LearnJSX"
import LearnProps from "./components/LearnProps"
import LearnEvent from "./components/LearnEvent"
import LearnShiftingStateUp from "./components/LearnShiftingStateUp"
import CounterApp from "./components/CounterApp"
import LearnUseEffect from "./components/LearnUseEffect"
import LearnUseMemo from "./components/LearnUseMemo"
function App() {
  
// let price = 200
  // const getStock = (data) => {
  //   console.log(data)
  // }
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
      <LearnUseMemo />
    </>
  )
}

export default App
