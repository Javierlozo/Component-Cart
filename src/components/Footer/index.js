import React from "react";
import useStyles from "./styles";

export default function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.footerContainer}>
      <h5>Copyright © 2020 Component Cart</h5>
    </div>
  );
}
