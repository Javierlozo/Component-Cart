import React from "react";

import useStyles from "./style";

import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

export default function ProfileNav({ value, setValue }) {
  const classes = useStyles();
  return (
    <div className={classes.profileNav}>
      <Tabs
        className={classes.tabs}
        indicatorColor="primary"
        centered
        value={value}
        // onChange={handleChange}
      >
        <Tab
          label="Components"
          onClick={() => {
            setValue(0);
          }}
        />
        <Tab
          label="About"
          onClick={() => {
            setValue(1);
          }}
        />
        <Tab
          label="Edit Profile"
          onClick={() => {
            setValue(2);
          }}
        />
      </Tabs>
    </div>
  );
}
