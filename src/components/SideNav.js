import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    sideContainer: {
      width: "25%",
      height: "80vh",
      marginTop: "4vh",
      marginLeft: "3vw",
      overflow: "scroll",
    },
    popularContainer: {
      height: "40%",
      marginTop: "3vh",
      marginBottom: "2vh"
    },
    friendContainer: {
      height: "40%",
      marginTop: "3vh",
      marginBottom: "2vh"
    },
  }));
  
  export default function SideNav() {
    const classes=useStyles()
    return (
      <Box className={classes.sideContainer}>
        <Box className={classes.popularContainer}>
          <h3>Placeholder for Most Popular Components component</h3>
          <ol>
            <li>Uno</li>
            <li>Dos</li>
            <li>Tres</li>
            <li>Cuatro</li>
            <li>Cinco</li>
          </ol>
        </Box>
        <Box className={classes.friendContainer}>
          <h3>Placeholder for Friends/Users component</h3>
          <ol>
            <li>Uno</li>
            <li>Dos</li>
            <li>Tres</li>
            <li>Cuatro</li>
            <li>Cinco</li>
          </ol>

        </Box>
      </Box>
        )
  }
