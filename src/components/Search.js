import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Box from "@material-ui/core/Box"

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  searchContainer:{
      backgroundColor: "#659DBD",
      width: "40vw",
      height: "30vh",
      margin: "10px auto",
      display: "flex",
      justifyContent: "center",
      borderRadius: "20px"
  }
}));

export default function Search() {
  const classes = useStyles();

  return (
      <Box className={classes.searchContainer}>
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
    <p>Sort By</p>
    <TextField id="dropdown" select></TextField>
    </form>
    </Box>
  );
}
