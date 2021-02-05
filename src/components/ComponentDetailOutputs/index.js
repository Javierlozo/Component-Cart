import React from "react";
import useStyles from "./styles";

export default function ComponentDetailOutput({ value, copied, testComponent }) {
  const classes = useStyles();
  return (
    <div className={classes.controlBox}>
      { value === "0" ? <div className={classes.codeView}>{testComponent.sourceCode}</div>
      : value === "1" ? <div className={classes.codeView}>{testComponent.dependencies}</div>
      : value === "2" ? <div className={classes.readMeView}>{testComponent.readMe}</div>
      : <></>
      } 
    </div>
  );
}
