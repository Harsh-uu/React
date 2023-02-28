import User from './User'
import { useState } from "react"
import Counter from './Counter';
function App() {
  const [num,setNum]=useState(0);
  return (
    <>
      {/* <section className='counter'>
      {num}
      <button onClick={()=>{
       setNum(num+1)
      }}>increment</button>
      </section> */}
      <Counter/>
      </>

  );
}

export default App;