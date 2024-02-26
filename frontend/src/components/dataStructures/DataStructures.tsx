import React, { useState } from "react"
import { ArraysComponent } from "./ArraysComponent"
import { QueueComponent } from "./QueueComponent"
import { StackComponent } from "./StackComponent"
import { Box, Card } from "@mui/material"
import { useStyles } from "../styles"

export const DataStructures = () => {
    const classes = useStyles();
    const [hoveredElement, setHoveredElement] = useState<string | null>(null);

    return (
        <Box className={classes.root}>
            <Card className={`${classes.card} ${classes.textCard}`}  
                    onMouseEnter={() => setHoveredElement("dataStructuresText")} 
                    onMouseLeave={() => setHoveredElement(null)}
                    style={{ backgroundColor: hoveredElement === "dataStructuresText" ? 'rgba(255, 255, 255, 0.4)' : 'rgba(255, 255, 255, 0.2)' }} 
                >
            <div>
                <ArraysComponent/>
                <QueueComponent/>
                <StackComponent/>
            </div>
            </Card>
        </Box>
    )
}