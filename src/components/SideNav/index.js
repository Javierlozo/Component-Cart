import React from "react";
import useStyles from "./styles";
import Box from "@material-ui/core/Box";
import PopularComponents from "./PopularComponents";
import PopularContributors from "./PopularContributors";

export default function SideNav() {
  const classes = useStyles();
  return (
    <Box className={classes.sideContainer}>
      <Box className={classes.popularContainer}>
        <PopularComponents />
      </Box>
      <Box className={classes.friendContainer}>
        <PopularContributors />
      </Box>
    </Box>
  );
}
