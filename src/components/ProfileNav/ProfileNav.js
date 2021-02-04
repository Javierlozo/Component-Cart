import React from "react";

import useStyles from "./style";

import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

export default function ProfileNav() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const classes = useStyles();
  return (
    <div className={classes.profileNav}>
      <Tabs
        value={value}
        onChange={handleChange}
        className={classes.tabs}
        indicatorColor="primary"
        centered
      >
        <Tab label="Components" />
        <Tab label="About" />
        <Tab label="Edit Profile" />
      </Tabs>
    </div>
  );
}
