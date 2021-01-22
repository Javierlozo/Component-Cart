import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Button from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    textAlign: "left",
    fontSize: "26px",
    fontWeight: "600",
  },
  linkGroup: {
    display: "flex",
    flexDirection: "row",
    marginRight: "4vw"
  },
  link: {
    cursor: "pointer",
    color: "inherit",
    marginLeft: "1.8vw",
    marginRight: "1.8vw",
  }
}));

export default function MenuAppBar() {
  const classes = useStyles();
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
      <AppBar position="static" backgroundColor="#659DBD">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Component Cart
          </Typography>
          <Box className={classes.linkGroup}>
            <Button className={classes.link} aria-label="go to home page" onClick={() => console.log("Home")}>Home</Button>
            <Button className={classes.link} aria-label="go to about page" onClick={() => console.log("About")}>About</Button>
            {/* If not logged in, will get the Login link*/}
            {!auth && (
              <Button className={classes.link}>Login</Button>
            )}
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
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
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
