import React, { useState } from "react"
import  "./dataStructures.css"
import { Box, Button, List, ListItem, ListItemText, Typography } from "@mui/material";
import { useStyles } from "../styles";

export const QueueComponent = () =>{
    const classes = useStyles();
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
    <Box>
      <Typography variant="h2" gutterBottom>Queue</Typography>
      <Box className={classes.queueImage}></Box>
      <Box display="flex" gap={2} mt={2}>
        <Button variant="contained" color="primary" onClick={handleEnqueu}>Enqueue</Button>
        <Button variant="contained" color="secondary" onClick={handleDequeue}>Dequeue</Button>
      </Box>
      <List>
        {queue.map((item, index) => (
          <ListItem key={index}>
            <ListItemText primary={item} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};
