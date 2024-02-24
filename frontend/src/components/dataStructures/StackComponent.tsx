import React, { useState } from "react"
import  "./dataStructures.css"

export const StackComponent = () =>{
    const [stack, setStack] = useState([])

    const handlePush = () => {
        const newItem = prompt('enter item to enqueue')
        setStack([...stack, newItem])
    }

    const handlePop =() => {
        const newStack = stack.slice(0, -1)
        setStack(newStack)
    }

    return (
        <div>
        <h2>Stack</h2>
        <div className="stack-image"></div>

        <button onClick={handlePop}>Pop</button>
        <button onClick={handlePush}>Push</button>

        <ul>
        {
            stack.map(
                (item, index) => (
                    <li key={index}>{item}</li>
                )
            )
        }
        </ul>
        </div>
    )
}