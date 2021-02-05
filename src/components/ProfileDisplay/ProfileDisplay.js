import React from "react";

import useStyles from "./style";
import { Avatar, Typography } from "@material-ui/core";

export default function ProfileDisplay() {
  const classes = useStyles();
  return (
    <div className={classes.profileDisplay}>
      <div className={classes.avatarContainer}>
        <Avatar className={classes.profileAvatar} />
        <Typography variant="h5" className={classes.profileName}>
          Profile name
        </Typography>
        <Typography variant="h6" className={classes.profileName}>
          @name
        </Typography>
      </div>
      <div className={classes.profileContent}>
        <Typography className={classes.profileAbout}>
          long about section long about section long about section long about
          section long about section long about section long about section long
          about section long about section
        </Typography>
        <Typography>links maybe</Typography>
        <Typography>links maybe</Typography>
        <Typography>links maybe</Typography>
      </div>
    </div>
  );
}
