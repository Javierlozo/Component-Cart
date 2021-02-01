import React from "react";
import styles from "./styles";

import AccountCircle from "@material-ui/icons/AccountCircle";

import {
  Switch,
  Box,
  Button,
  Menu,
  MenuItem,
  IconButton,
  Typography,
  Toolbar,
  AppBar,
} from "@material-ui/core";

export default function TopNavbar({ setUserTheme, userTheme }) {
  const classes = styles();
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  // Auth change handler - may re-use this, but login/logout slider is gone so commented out
  // const handleChange = (event) => {
  //   setAuth(event.target.checked);
  // };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Component Cart
          </Typography>
          <Box className={classes.linkGroup}>
            <Button
              className={classes.link}
              aria-label="go to home page"
              onClick={() => console.log("Home")}
            >
              Home
            </Button>
            <Button
              className={classes.link}
              aria-label="go to about page"
              onClick={() => console.log("About")}
            >
              About
            </Button>
            <Switch onChange={() => setUserTheme(!userTheme)} />
            {/* If not logged in, will get the Login link*/}
            {!auth && <Button className={classes.link}>Login</Button>}
          </Box>
          {/* If logged in - will get icon button/account circle/avatar & drop down menu. */}
          {auth && (
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
