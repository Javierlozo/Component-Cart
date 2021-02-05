import React from "react";
import useStyles from "./style";

import ProfileEdit from "../ProfileEdit/ProfileEdit";
import ProfileDisplay from "../ProfileDisplay/ProfileDisplay";

export default function ProfileContent({ value }) {
  const classes = useStyles();
  return (
    <div className={classes.profileContent}>
      {value === 0 ? (
        <div className={classes.left}></div>
      ) : value === 1 ? (
        <div className={classes.left}>hello</div>
      ) : (
        <div className={classes.left}>
          <ProfileEdit />
        </div>
      )}
      <ProfileDisplay />
    </div>
  );
}
