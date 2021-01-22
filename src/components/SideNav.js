import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

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
    sidecontainer: {
        width: "25%",
        height: 600,
        border: "1px solid green",
        marginTop: "8px",
        overflow: "scroll"
    }
  }));
  
  export default function SideNav() {
      const classes=useStyles()
      return (
          <div className={classes.sidecontainer}>
              
          </div>
          )
  }
