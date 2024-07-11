import React, { useState } from 'react';
import { Box, Typography, Button, List, ListItem, ListItemText } from '@mui/material';
import  "./dataStructures.css"
import { useStyles } from '../styles';

export const StackComponent = () =>{
    const classes = useStyles();
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
    <Box>
      <Typography variant="h2" gutterBottom>Stack</Typography>
      <Box className={classes.stackImage}></Box>
      <Box display="flex" gap={2} mt={2}>
        <Button variant="contained" color="primary" onClick={handlePush}>Push</Button>
        <Button variant="contained" color="secondary" onClick={handlePop}>Pop</Button>
      </Box>
      <List>
        {stack.map((item, index) => (
          <ListItem key={index}>
            <ListItemText primary={item} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};