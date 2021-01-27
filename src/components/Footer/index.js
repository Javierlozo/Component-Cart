import React from 'react';
import useStyles from "./styles";
import Box from '@material-ui/core/Box'

export default function Footer() {
  const classes = useStyles();

  return (
    <Box classes={classes.footerContainer}>
      <h5>Copyright © 2020 Component Cart</h5>
    </Box>
  );
}
