import React from "react";
import { useState } from "react";
import { Box, Button, Typography, List, ListItem, ListItemText } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  arrayImage: {
    backgroundImage: `url('../../shared/dataStructures/array.png')`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    backgroundPosition: "center",
  },
});

export const ArraysComponent = () => {
  const classes = useStyles();
  const [array, setArray] = useState([]);

  const handleInsert = () => {
    const newItem = prompt('Enter item to insert in the array: ');
    setArray([...array, newItem]);
  };

  const handleRemove = () => {
    const newArray = array.slice(0, -1);
    setArray(newArray);
  };

  return (
    <Box>
      <Typography variant="h2" gutterBottom>Array</Typography>
      <Box className={classes.arrayImage}></Box>
      <Button variant="contained" color="primary" onClick={handleInsert}>Insert</Button>
      <Button variant="contained" color="secondary" onClick={handleRemove}>Remove</Button>
      <List>
        {array.map((item, index) => (
          <ListItem key={index}>
            <ListItemText primary={item} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};
