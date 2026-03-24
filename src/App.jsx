import HelloWorld from "./components/HelloWorld"
import LearnReact from "./components/LearnReact"
import LearnJSX from "./components/LearnJSX"
import LearnProps from "./components/LearnProps"
function App() {
  
let price = 200
  return (
    <>
      <h1>Learn React</h1>
      {/* <HelloWorld />
      <LearnReact /> */}
      {/* <LearnJSX />  */}
      <LearnProps stock="Apple" price={price} />
    </>
  )
}

export default App
