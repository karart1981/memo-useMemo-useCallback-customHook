import { useCallback, /*useMemo,*/ useState } from 'react'
import './App.css'
import Child1 from './Child1'
import Child2 from './Child2'

let list = new Set()
function App() {
  console.log("App render")
  const [num, setNum] = useState(10)
  const [count,setCount] = useState(0)
  
  const countUp = useCallback(()=>{
    setCount(count + 1)
  },[count])
    
  
  list.add(countUp)
  console.log(list.size)
  //const form  = useMemo(()=> count + 1, [count])
  return (
    <>
      
      Num: {num}
      <Child1 />
      <Child2 />
      <button onClick={()=> setNum(num + 1)}>Add</button>
    </>
  )
}

export default App
