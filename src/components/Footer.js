import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box'

const useStyles = makeStyles((theme) => ({
  footerContainer: {
    position: "fixed", 
    bottom: "0",
    left: "0",
    width: "100%",
    backgroundColor: "black"
  }
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <Box classes={classes.footerContainer}>
      <h5>Copyright © 2020 Component Cart</h5>
    </Box>
  );
}
