import React from "react";

import useStyles from "./style";
import { Paper } from "@material-ui/core";

export default function ProfileEdit() {
  const classes = useStyles();
  return <Paper className={classes.profileEdit}></Paper>;
}
