import { useState } from "react";

function Counter(){
    const [num, setNum] = useState(0)
return(
    <section className="counter">
        {num}
        <button onClick={()=>{
            setNum(num-1)
        }}>decrement</button>
        <button onClick={()=>{
            setNum(num+1)
        }}>increment</button>
        <button onClick={()=>{
            setNum(0)
        }}>reset</button>
    </section>
)
}

export default Counter;