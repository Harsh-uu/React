import User from './User'
import { useState } from "react"
function App() {
  const [num,setNum]=useState(0);
  return (
    <>
      <h1>Hello World!</h1>
      <User/>
      <section className='counter'>
      {num}
      <button onClick={()=>{
       setNum(num+1)
      }}>increment</button>
      </section>
      </>
  );
}

export default App;