import React from "react";

import TopNavbar from "../../components/TopNavbar/index";
import SideNav from "../../components/SideNav/index";
import Search from "../../components/Search/index";

import useStyles from "./style";

export default function Home() {
  const classes = useStyles();
  return (
    <div className={classes.homePage}>
      <SideNav />
      <Search />
    </div>
  );
}
