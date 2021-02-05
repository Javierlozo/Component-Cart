import React, { useState } from 'react'
import { Box, Typography } from '@material-ui/core'
import { ToggleButtonGroup, ToggleButton } from '@material-ui/lab'
import useStyles from "./styles";
import iggy from "../../assets/iggy.png"
import ComponentDetailOutputs from "../../components/ComponentDetailOutputs"

// sample
const testComponent = {
  name: "TestComponent",
  createdBy: "Username Profileperson",
  about: "About stuff.  This is the about section, filled out.  Maybe a character limit here?.",
  img: iggy,
  sourceCode: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  dependencies: "Test Dependencies",
  readMe: "Sample Readme here"
}

export default function ComponentPage() {
  const classes = useStyles()
  const [copied, toggleCopied] = useState(false)
  const [selectedTab, setSelectedTab] = useState('0')

  const handleTabChange = (event, newTab) => {
    if (newTab !== null) {
      setSelectedTab(newTab)
    }
  };

  // copyButton() exists at this moment as an idea for handling uncreated snackbar msg - it'll also need to handle actual copying to clipboard too
  const copyButton = () => {
    console.log("Clicked Copyyyy")
    toggleCopied(true)
    setTimeout(()=> {
      console.log("Snackbar disappear")
    }, 2800)
  }

  console.log("Copied", copied)

  return (
    <Box className={classes.wrapper}>
      <Box className={classes.details}>
        {/* at some point, logic for a default photo if none uploaded
        perhaps also an upload photo drag n drop (or something of the sort)? */}
        <Box 
          component="img" 
          className={classes.image} 
          src={testComponent.img}/>
        <Box className={classes.rightDetails}>
          <Typography>Name: {testComponent.name}</Typography>
          <Typography>Created By: {testComponent.createdBy}</Typography>
          <Typography>About: {testComponent.about}</Typography>
        </Box>
      </Box>
      <Box className={classes.buttonGroup}>
        <ToggleButtonGroup 
          value={selectedTab}
          onChange={handleTabChange}
          exclusive
          >
          <ToggleButton disableRipple value="0">Source Code</ToggleButton>
          <ToggleButton disableRipple value="1">Dependencies</ToggleButton>
          <ToggleButton disableRipple value="2">ReadMe</ToggleButton>
          <ToggleButton disableRipple onClick={() => copyButton()}>Copy Source</ToggleButton>
        {/* ux banner confirming once Copy Source clicked? 
           copy button may be moving to within Source Code and Dependencies instead */}
        </ToggleButtonGroup>
      </Box>
      <Box className={classes.buttonOutput}>
      {/* Source Code & Dependencies will render like code editor. */}
        {selectedTab ? (
          <ComponentDetailOutputs value={selectedTab} copied={copied} testComponent={testComponent} />
        ) : (
          <div>Click a tab above to dive in</div>
        )
        }
      </Box>
    </Box>
  )
}