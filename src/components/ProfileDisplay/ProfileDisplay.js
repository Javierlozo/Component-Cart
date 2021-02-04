import React from "react";

import useStyles from "./style";
import { Paper } from "@material-ui/core";

export default function ProfileDisplay() {
  const classes = useStyles();
  return <Paper className={classes.profileDisplay}>ok</Paper>;
}
