import React from "react";
import useStyles from "./style";

import ProfileDisplay from "../ProfileDisplay/ProfileDisplay";

export default function ProfileContent() {
  const classes = useStyles();
  return (
    <div className={classes.profileContent}>
      <div className={classes.feed}>
        <div className={classes.tempPost}></div>
        <div className={classes.tempPost}></div>
        <div className={classes.tempPost}></div>
        <div className={classes.tempPost}></div>
        <div className={classes.tempPost}></div>
        <div className={classes.tempPost}></div>
        <div className={classes.tempPost}></div>
        <div className={classes.tempPost}></div>
        <div className={classes.tempPost}></div>
        <div className={classes.tempPost}></div>
        <div className={classes.tempPost}></div>
        <div className={classes.tempPost}></div>
      </div>
      <ProfileDisplay />
    </div>
  );
}
