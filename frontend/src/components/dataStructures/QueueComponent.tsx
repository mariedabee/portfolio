import React, { useState } from "react"
import  "./dataStructures.css"

export const QueueComponent = () =>{
    const [queue, setQueue] = useState([])

    const handleEnqueu = () => {
        const newItem = prompt('enter item to enqueue')
        setQueue([...queue, newItem])
    }

    const handleDequeue =() => {
        const [removedItem, ...newQueue] = queue
        setQueue(newQueue)
    }

    return (
        <div>
        <h2>Queue</h2>
        <div className="queue-image"></div>
        <button onClick={handleEnqueu}>Enqueue</button>
        <button onClick={handleDequeue}>Dequeue</button>

        <ul>
        {
            queue.map(
                (item, index) => (
                    <li key={index}>{item}</li>
                )
            )
        }
        </ul>
        </div>
    )
}