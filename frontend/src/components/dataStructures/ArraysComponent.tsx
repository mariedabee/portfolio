import React from "react"
import { useState } from "react"

export const ArraysComponent = () => {
   const [array, setArray] = useState([])

   const handleInsert = () =>{
    const newItem = prompt('Enter item to insert in the array: ')
    setArray([...array, newItem]) 
   }

   const handleRemove = () => {
    const newArray = array.slice(0, -1)
    setArray(newArray)
   }

   
    return (
        <div>
            <h2>Array</h2>
            <button onClick={handleInsert}>Insert item to the array</button>
            <button onClick={handleRemove}>Remove</button>

            <ul>
                {array.map((item, index) =>(
                    <li key={index}> {item} </li>
                ))}
            </ul>
        </div>
    )
}