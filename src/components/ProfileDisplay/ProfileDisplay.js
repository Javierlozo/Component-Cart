import React from "react";

import useStyles from "./style";
import { Avatar, Typography, Chip, Button } from "@material-ui/core";

import ProfileEdit from "../ProfileEdit/ProfileEdit";

export default function ProfileDisplay() {
  const classes = useStyles();

  const [links, setLinks] = React.useState([]);

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
        <div className={classes.linkContainer}>
          {links.map((link) => (
            <a href={link} target="_blank" className={classes.anchor}>
              <Chip className={classes.link} label={link} clickable />
            </a>
          ))}
        </div>
        <ProfileEdit setLinks={setLinks} links={links} />
      </div>
    </div>
  );
}
