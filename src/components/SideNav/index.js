import React from 'react';
import useStyles from './styles';
import Box from '@material-ui/core/Box'
  
export default function SideNav() {
  const classes = useStyles()
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
