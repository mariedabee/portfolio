import React from "react"
import { ArraysComponent } from "./ArraysComponent"
import { QueueComponent } from "./QueueComponent"
import { StackComponent } from "./StackComponent"

export const DataStructures = () => {
    return (
        <div>
            <ArraysComponent></ArraysComponent>
            <QueueComponent/>
            <StackComponent/>
        </div>
    )
}